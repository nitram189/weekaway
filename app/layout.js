import { Footer, Navbar, TopNavbar } from '@/components';
import { inter } from './fonts';
import './globals.css';


export const metadata = {
  title: 'Weekaway - Your best choice for traveling',
  description: 'Find and book your next holiday plans. From cruises to luxury resorts, everything you need to relax and enjoy is on weekaway.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ inter.className }>

      <body>
        <TopNavbar/>
        <Navbar />
        { children }
        <Footer />
      </body>

    </html>
  )
}
