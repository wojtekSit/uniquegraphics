
import localFont from 'next/font/local'
import { Michroma, Inter } from 'next/font/google'

export const swiperacedemo = localFont({
    src: './fonts/SWIPERACEDEMO.ttf',
    display: 'swap',
    variable: '--swipe-race-demo',
})

export const michroma = Michroma({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-michroma',
    display: 'swap',
    style: ['normal'],
})

export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})
