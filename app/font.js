import { Exo_2, Rubik, Zilla_Slab } from 'next/font/google'

export const exo2 = Exo_2({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-exo-2'
})

export const rubik = Rubik({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-rubik'
})

export const zillaSlab = Zilla_Slab({
    subsets: ['latin'],
    display: 'swap',
    weight: ["300", "400", "500", "600", "700",],
    variable: '--font-zilla-slab'
})