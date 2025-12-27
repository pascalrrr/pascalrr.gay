import { ImageResponse } from 'next/og'
import { getGravatarUrl } from 'react-awesome-gravatar'
import { appConfig } from '~/config';

// Image metadata
export const contentType = 'image/png'

export default function Icon() {
    const profileUrl = getGravatarUrl(appConfig.email, appConfig.gravatarOptions)
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={profileUrl}></img>
            </div>
        ),
        {
            width: 32,
            height: 32,
        }
    )
}