'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function HeroSection() {
  const [stats, setStats] = useState({
    upcoming: 0,
    ongoing: 0,
    total: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [upcomingRes, ongoingRes] = await Promise.all([
        supabase.from('hackathons').select('id', { count: 'exact', head: true }).eq('status', 'upcoming'),
        supabase.from('hackathons').select('id', { count: 'exact', head: true }).eq('status', 'ongoing'),
      ])

      const upcoming = upcomingRes.count || 0
      const ongoing = ongoingRes.count || 0

      setStats({
        upcoming,
        ongoing,
        total: upcoming + ongoing,
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section style={styles.hero}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>🚀 Join the Innovation Revolution</span>
          </div>
          <h1 style={styles.title}>
            Welcome to <span style={styles.highlight}>HackHub</span>
          </h1>
          <p style={styles.description}>
            Discover exciting hackathons, compete with the best, and turn your ideas into reality.
            Join thousands of developers, designers, and innovators in the ultimate coding challenge.
          </p>
          
          {/* Statistics */}
          {!loading && (
            <div style={styles.stats}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{stats.total}+</div>
                <div style={styles.statLabel}>Hackathons</div>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{stats.upcoming}</div>
                <div style={styles.statLabel}>Upcoming</div>
              </div>
              <div style={styles.statDivider}></div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>{stats.ongoing}</div>
                <div style={styles.statLabel}>Ongoing</div>
              </div>
            </div>
          )}

          <div style={styles.cta}>
            <Link href="/upcoming" className="btn-primary" style={styles.primaryBtn}>
              Explore Upcoming Hackathons
            </Link>
            <Link href="/ongoing" className="btn-secondary" style={styles.secondaryBtn}>
              View Ongoing Events
            </Link>
          </div>

          {/* Feature Highlights */}
          <div style={styles.features}>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>⚡</div>
              <div style={styles.featureText}>Real-time Updates</div>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>🎯</div>
              <div style={styles.featureText}>Easy Registration</div>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>🏆</div>
              <div style={styles.featureText}>Competitive Events</div>
            </div>
            <div style={styles.feature}>
              <div style={styles.featureIcon}>🌐</div>
              <div style={styles.featureText}>Global Community</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div style={styles.scrollIndicator}>
        <div style={styles.scrollArrow}>↓</div>
        <span style={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    padding: '120px 0 80px',
    background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)',
    borderBottom: '2px solid #e10600',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 1,
  },
  content: {
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#1a1a1a',
    border: '1px solid #e10600',
    borderRadius: '20px',
    padding: '8px 20px',
    marginBottom: '24px',
  },
  badgeText: {
    color: '#e10600',
    fontSize: '14px',
    fontWeight: '600',
  },
  title: {
    fontSize: 'clamp(36px, 5vw, 64px)',
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#ffffff',
    lineHeight: '1.2',
  },
  highlight: {
    color: '#e10600',
  },
  description: {
    fontSize: 'clamp(16px, 2vw, 20px)',
    color: '#cccccc',
    marginBottom: '40px',
    lineHeight: '1.8',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '32px',
    marginBottom: '40px',
    padding: '32px',
    backgroundColor: '#1a1a1a',
    borderRadius: '12px',
    border: '1px solid #333333',
    flexWrap: 'wrap',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: 'bold',
    color: '#e10600',
    marginBottom: '4px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#cccccc',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: '#333333',
  },
  cta: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '50px',
  },
  primaryBtn: {
    backgroundColor: '#e10600',
    color: '#ffffff',
    padding: '16px 32px',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    textDecoration: 'none',
    boxShadow: '0 4px 15px rgba(225, 6, 0, 0.3)',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '16px 32px',
    border: '2px solid #e10600',
    borderRadius: '4px',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    textDecoration: 'none',
  },
  features: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    marginTop: '40px',
    paddingTop: '40px',
    borderTop: '1px solid #333333',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  featureIcon: {
    fontSize: '32px',
    marginBottom: '4px',
  },
  featureText: {
    fontSize: '14px',
    color: '#cccccc',
    fontWeight: '500',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '30px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    opacity: 0.7,
    animation: 'bounce 2s infinite',
  },
  scrollArrow: {
    fontSize: '24px',
    color: '#e10600',
  },
  scrollText: {
    fontSize: '12px',
    color: '#cccccc',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
}

