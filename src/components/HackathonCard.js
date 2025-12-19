export default function HackathonCard({ hackathon }) {
  const formatDate = (dateString) => {
    if (!dateString) return 'TBA'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getStatusColor = (status) => {
    return status === 'ongoing' ? '#e10600' : '#00ff00'
  }

  return (
    <div className="card" style={styles.card}>
      {hackathon.image_url && (
        <div style={styles.imageContainer}>
          <img 
            src={hackathon.image_url} 
            alt={hackathon.name}
            style={styles.image}
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}
      <div style={styles.content}>
        <div style={styles.header}>
          <h3 style={styles.title}>{hackathon.name}</h3>
          <span 
            style={{
              ...styles.status,
              backgroundColor: getStatusColor(hackathon.status),
            }}
          >
            {hackathon.status?.toUpperCase() || 'UPCOMING'}
          </span>
        </div>
        <p style={styles.description}>
          {hackathon.description || 'No description available.'}
        </p>
        <div style={styles.details}>
          <div style={styles.detailItem}>
            <strong style={styles.label}>Date:</strong>
            <span style={styles.value}>
              {formatDate(hackathon.start_date)} - {formatDate(hackathon.end_date)}
            </span>
          </div>
          {hackathon.time && (
            <div style={styles.detailItem}>
              <strong style={styles.label}>Time:</strong>
              <span style={styles.value}>{hackathon.time}</span>
            </div>
          )}
          {hackathon.mode && (
            <div style={styles.detailItem}>
              <strong style={styles.label}>Mode:</strong>
              <span style={styles.value}>{hackathon.mode}</span>
            </div>
          )}
        </div>
        {hackathon.registration_link && (
          <a
            href={hackathon.registration_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={styles.registerBtn}
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333333',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    backgroundColor: '#0f0f0f',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '16px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '12px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
    flex: 1,
  },
  status: {
    padding: '4px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#ffffff',
    whiteSpace: 'nowrap',
  },
  description: {
    color: '#cccccc',
    fontSize: '14px',
    lineHeight: '1.6',
    flex: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  detailItem: {
    display: 'flex',
    gap: '8px',
    fontSize: '14px',
  },
  label: {
    color: '#e10600',
    fontWeight: '600',
  },
  value: {
    color: '#cccccc',
  },
  registerBtn: {
    backgroundColor: '#e10600',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: '600',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    marginTop: 'auto',
    display: 'inline-block',
    textDecoration: 'none',
    width: '100%',
  },
}

