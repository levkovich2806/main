import React, { memo } from "react";

type Props = {
    embedLink: string
}

export const YuoTubeVideo = memo((props: Props) => {
    return (
        <iframe
            width="100%"
            height="315"
            src={props.embedLink}
            title="Optimizing React: Web & Beyond"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
                maxWidth: '560px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
        </iframe>
    )
})
