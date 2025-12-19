import './globals.css'
import ConditionalNavbar from '../components/ConditionalNavbar'
import ConditionalFooter from '../components/ConditionalFooter'

export const metadata = {
  title: 'HackHub - Hackathon Management Platform',
  description: 'Discover and manage hackathons',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConditionalNavbar />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  )
}

