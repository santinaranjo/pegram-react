import React from "react";
import { Img, ImgWrapper, Button } from "./syles";

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    return(
        <article>
            <a href={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
            </a>

            <Button>
                {likes} likes!
            </Button>
        </article>
    )
}

export { PhotoCard }