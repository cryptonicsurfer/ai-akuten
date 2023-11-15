import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI+akuten',
  description: 'AI hjälp från Falkenberg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          href='https://fonts.googleapis.com/css2?family=Bungee+Hairline&display=swap' 
          rel="stylesheet"  
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
