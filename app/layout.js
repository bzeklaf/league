
import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'League of Sound',
  description: 'League of Sound is a music discovery platform for League of Legends.',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="dark" lang="en" className='scroll-smooth'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
