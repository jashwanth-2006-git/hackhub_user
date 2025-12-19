import HeroSection from '../components/HeroSection'
import UpcomingList from '../components/UpcomingList'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="section">
        <div className="container">
          <h2 style={styles.sectionTitle}>Upcoming Hackathons</h2>
          <UpcomingList />
        </div>
      </section>
    </div>
  )
}

const styles = {
  sectionTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '32px',
    textAlign: 'center',
  },
}

