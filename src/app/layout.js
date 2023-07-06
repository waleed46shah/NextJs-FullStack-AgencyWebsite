import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter} from 'next/font/google' //No need to download google fonts
import Footer from './../components/footer/Footer';
import { Suspense } from 'react'; //Enables us to show loading page.
import Loading from './contact/loading';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lama Mia',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}> {/*Wrapped on whole body to show on all pages (if we add it)*/}
        <body className={inter.className}>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </body>
      </Suspense>

    </html>
  )
}
