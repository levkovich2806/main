import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Sergey Levkovich',
    description: 'Personal page. Sergey Levkovich - software developer',
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover'
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
