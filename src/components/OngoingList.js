'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import HackathonCard from './HackathonCard'

export default function OngoingList() {
  const [hackathons, setHackathons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchHackathons()
    
    // Subscribe to real-time updates
    const channel = supabase
      .channel('hackathons-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'hackathons',
          filter: `status=eq.ongoing`,
        },
        () => {
          fetchHackathons()
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const fetchHackathons = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('hackathons')
        .select('*')
        .eq('status', 'ongoing')
        .order('start_date', { ascending: true })

      if (error) throw error
      setHackathons(data || [])
      setError(null)
    } catch (err) {
      console.error('Error fetching hackathons:', err)
      setError('Failed to load hackathons. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div style={styles.loading}>
        <p style={styles.loadingText}>Loading hackathons...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div style={styles.error}>
        <p style={styles.errorText}>{error}</p>
      </div>
    )
  }

  if (hackathons.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={styles.emptyText}>No ongoing hackathons at the moment.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-3" style={styles.grid}>
      {hackathons.map((hackathon) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon} />
      ))}
    </div>
  )
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
  },
  loading: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  loadingText: {
    color: '#cccccc',
    fontSize: '18px',
  },
  error: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  errorText: {
    color: '#e10600',
    fontSize: '18px',
  },
  empty: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  emptyText: {
    color: '#cccccc',
    fontSize: '18px',
  },
}

