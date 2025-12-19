export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={styles.content}>
          <h1 style={styles.title}>About HackHub</h1>
          <div style={styles.section}>
            <h2 style={styles.heading}>Our Mission</h2>
            <p style={styles.text}>
              HackHub is a comprehensive platform designed to connect developers, designers, and innovators
              with exciting hackathon opportunities. We aim to make it easy to discover, participate in, and
              manage hackathons of all scales.
            </p>
          </div>
          <div style={styles.section}>
            <h2 style={styles.heading}>What We Offer</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}>Curated list of upcoming and ongoing hackathons</li>
              <li style={styles.listItem}>Detailed information about each event</li>
              <li style={styles.listItem}>Easy registration process</li>
              <li style={styles.listItem}>Real-time updates on hackathon status</li>
              <li style={styles.listItem}>Admin tools for managing hackathons</li>
            </ul>
          </div>
          <div style={styles.section}>
            <h2 style={styles.heading}>For Participants</h2>
            <p style={styles.text}>
              Whether you're a beginner looking to gain experience or a seasoned developer seeking new challenges,
              HackHub provides a centralized platform to find hackathons that match your interests and skill level.
            </p>
          </div>
          <div style={styles.section}>
            <h2 style={styles.heading}>For Organizers</h2>
            <p style={styles.text}>
              Our admin panel allows organizers to easily add, update, and manage hackathon listings, ensuring
              that participants always have access to the latest information.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  content: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    fontSize: 'clamp(36px, 5vw, 48px)',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '40px',
    textAlign: 'center',
  },
  section: {
    marginBottom: '40px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#e10600',
    marginBottom: '16px',
  },
  text: {
    fontSize: '16px',
    color: '#cccccc',
    lineHeight: '1.8',
    marginBottom: '16px',
  },
  list: {
    fontSize: '16px',
    color: '#cccccc',
    lineHeight: '2',
    paddingLeft: '24px',
  },
  listItem: {
    marginBottom: '8px',
  },
}

