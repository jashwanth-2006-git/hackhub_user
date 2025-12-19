import UpcomingList from '../../components/UpcomingList'

export default function UpcomingPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={styles.title}>Upcoming Hackathons</h1>
        <p style={styles.subtitle}>
          Discover exciting hackathons coming up soon. Register now and be part of the innovation!
        </p>
        <UpcomingList />
      </div>
    </section>
  )
}

const styles = {
  title: {
    fontSize: 'clamp(32px, 4vw, 48px)',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '16px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '18px',
    color: '#cccccc',
    marginBottom: '40px',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 40px',
  },
}

