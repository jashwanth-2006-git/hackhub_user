export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <div style={styles.content}>
          <div style={styles.section}>
            <h3 style={styles.title}>HackHub</h3>
            <p style={styles.text}>
              Your premier platform for discovering and managing hackathons.
            </p>
          </div>
          <div style={styles.section}>
            <h4 style={styles.subtitle}>Quick Links</h4>
            <ul style={styles.linkList}>
              <li><a href="/" style={styles.link}>Home</a></li>
              <li><a href="/upcoming" style={styles.link}>Upcoming</a></li>
              <li><a href="/ongoing" style={styles.link}>Ongoing</a></li>
              <li><a href="/about" style={styles.link}>About</a></li>
            </ul>
          </div>
          <div style={styles.section}>
            <h4 style={styles.subtitle}>Contact</h4>
            <p style={styles.text}>
              For inquiries, please reach out through our admin portal.
            </p>
          </div>
        </div>
        <div style={styles.bottom}>
          <p style={styles.copyright}>
            &copy; {new Date().getFullYear()} HackHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#1a1a1a',
    borderTop: '2px solid #e10600',
    padding: '40px 0 20px',
    marginTop: '60px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px',
    marginBottom: '32px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  title: {
    color: '#e10600',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '8px',
  },
  text: {
    color: '#cccccc',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  linkList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  link: {
    color: '#cccccc',
    fontSize: '14px',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  },
  bottom: {
    borderTop: '1px solid #333333',
    paddingTop: '20px',
    textAlign: 'center',
  },
  copyright: {
    color: '#888888',
    fontSize: '14px',
  },
}

