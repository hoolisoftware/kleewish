'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'


import css from './index.module.scss'
import sun from './icons/sun.svg'
import moon from './icons/moon.svg'


export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme()

    return <button
        className={css.themeSwitch}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
        <div className={[css.iconBox].join(' ')}>
            <Image className={css.icon} src={sun} alt='light' />
        </div>
        <div className={[css.iconBox, css.iconBoxActive].join(' ')}>
            <Image className={css.icon} src={moon} alt='dark' />
        </div>
        <div className={[css.switch].join(' ')}>
            <div className={css.switchInner}></div>
        </div>
    </button>
}