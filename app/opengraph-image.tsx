import { ImageResponse } from 'next/og'
import { CSSProperties } from 'react'
import { headers } from "next/headers"

// Image metadata
export const alt = 'pascalrr.gay | Overview'
export const contentType = 'image/png'

async function loadGoogleFont(font: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}`
    const css = await (await fetch(url)).text()
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/)
    if (resource) {
        const response = await fetch(resource[1])
        if (response.status == 200) {
            return await response.arrayBuffer()
        }
    }
    throw new Error('failed to load font data')
}

export default async function Image() {
    const styles: Record<string, CSSProperties> = {
        body: {
            width: '100%',
            height: '100%'
        },
        background: {
            width: '100%',
            height: '100%',
            background: '#1e1e2e',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerBackground: {
            width: '70%',
            height: '30%',
            background: '#181825',
            display: 'flex',
            marginTop: '15%',
            borderRadius: '45px'
        },
        headerText: {
            background: 'linear-gradient(to right, #D60270, #9B4F96 , #0038A8)',
            backgroundClip: 'text',
            fontSize: 120,
            fontFamily: 'Arima',
            color: 'transparent',
            alignSelf: 'center',
            margin: 'auto'
        },
        footerBackground: {
            width: '75%',
            height: '15%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
            margin: 'auto'
        },
        footerItem: {
            background: '#181825',
            fontSize: 60,
            fontFamily: 'Raleway',
            color: '#cdd6f4',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '30px',
            padding: '10px',
        }
    }
    return new ImageResponse(
        (
            <main style={styles.body}>
                <div style={styles.background}>
                    <div style={styles.headerBackground}>
                        <p style={styles.headerText}>
                            pascalrr.gay
                        </p>
                    </div>
                    <div style={styles.footerBackground}>
                        <span style={styles.footerItem}>About Me</span>
                        <span style={styles.footerItem}>Blog Posts</span>
                        <span style={styles.footerItem}>Projects</span>
                    </div>
                </div>
            </main>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: 'Arima',
                    data: await loadGoogleFont('Arima'),
                    style: 'normal'
                },
                {
                    name: 'Raleway',
                    data: await loadGoogleFont('Raleway'),
                    style: 'normal'
                }
            ]
        }
    )
}