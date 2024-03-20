import React, {memo} from "react";

type Props = {
    embedLink: string
}

export const YuoTubeVideo = memo((props: Props) => {
    return (
        <iframe
            width="560"
            height="315"
            src={props.embedLink}
            title="Optimizing React: Web & Beyond"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
        </iframe>
    )
})
