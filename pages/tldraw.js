import React from 'react'
import '@tldraw/tldraw/tldraw.css'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import '@/styles/routes/main.scss';


const Tldraw = dynamic(async () => (
    await import('@tldraw/tldraw')).Tldraw,
    {
        ssr: false
    }

)


const tldraw = () => {

    useEffect(() => {
        if (localStorage.getItem('TLDRAW_USER_DATA_v3') !== null) {
            let darkMode = JSON.parse(localStorage.getItem('TLDRAW_USER_DATA_v3'))
            darkMode.user.isDarkMode = true
            // darkMode.user.isDebugMode = false   
            localStorage.setItem('TLDRAW_USER_DATA_v3', JSON.stringify(darkMode))
        }
    }, [])

    return (
        <div style={{ position: 'fixed', inset: 0 }}>
            < Tldraw />
        </div >
    )
}


export default tldraw