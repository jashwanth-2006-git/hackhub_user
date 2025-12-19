'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient'

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  const isActive = (path) => pathname === path

  return (
    <aside style={styles.sidebar}>
      <div style={styles.header}>
        <h2 style={styles.title}>Admin Panel</h2>
      </div>
      <nav style={styles.nav}>
        <Link
          href="/admin"
          style={{
            ...styles.navLink,
            ...(isActive('/admin') && styles.navLinkActive),
          }}
        >
          Dashboard
        </Link>
        <Link
          href="/admin/upcoming"
          style={{
            ...styles.navLink,
            ...(isActive('/admin/upcoming') && styles.navLinkActive),
          }}
        >
          Manage Upcoming
        </Link>
        <Link
          href="/admin/ongoing"
          style={{
            ...styles.navLink,
            ...(isActive('/admin/ongoing') && styles.navLinkActive),
          }}
        >
          Manage Ongoing
        </Link>
      </nav>
      <div style={styles.footer}>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Logout
        </button>
      </div>
    </aside>
  )
}

const styles = {
  sidebar: {
    width: '250px',
    backgroundColor: '#1a1a1a',
    borderRight: '2px solid #e10600',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 100,
  },
  header: {
    padding: '24px',
    borderBottom: '1px solid #333333',
  },
  title: {
    color: '#e10600',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  nav: {
    flex: 1,
    padding: '20px 0',
  },
  navLink: {
    display: 'block',
    padding: '16px 24px',
    color: '#cccccc',
    fontSize: '16px',
    transition: 'all 0.3s ease',
  },
  navLinkActive: {
    color: '#ffffff',
    backgroundColor: '#e10600',
  },
  footer: {
    padding: '24px',
    borderTop: '1px solid #333333',
  },
  logoutBtn: {
    width: '100%',
    backgroundColor: '#e10600',
    color: '#ffffff',
    padding: '12px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
  },
}

