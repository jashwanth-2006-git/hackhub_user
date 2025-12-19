'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link href="/" style={styles.logo}>
          <span style={styles.logoText}>HackHub</span>
        </Link>
        <ul style={styles.navList}>
          <li>
            <Link 
              href="/" 
              style={{
                ...styles.navLink,
                ...(isActive('/') && styles.navLinkActive)
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/upcoming" 
              style={{
                ...styles.navLink,
                ...(isActive('/upcoming') && styles.navLinkActive)
              }}
            >
              Upcoming
            </Link>
          </li>
          <li>
            <Link 
              href="/ongoing" 
              style={{
                ...styles.navLink,
                ...(isActive('/ongoing') && styles.navLinkActive)
              }}
            >
              Ongoing
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              style={{
                ...styles.navLink,
                ...(isActive('/about') && styles.navLinkActive)
              }}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#1a1a1a',
    borderBottom: '2px solid #e10600',
    padding: '16px 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#e10600',
  },
  logoText: {
    color: '#e10600',
  },
  navList: {
    display: 'flex',
    listStyle: 'none',
    gap: '32px',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  navLink: {
    color: '#cccccc',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  navLinkActive: {
    color: '#e10600',
  },
}

