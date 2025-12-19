import OngoingList from '../../components/OngoingList'

export default function OngoingPage() {
  return (
    <section className="section">
      <div className="container">
        <h1 style={styles.title}>Ongoing Hackathons</h1>
        <p style={styles.subtitle}>
          Check out hackathons that are currently happening. Join the competition and showcase your skills!
        </p>
        <OngoingList />
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

