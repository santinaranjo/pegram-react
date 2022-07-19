import React from "react";

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpeg";

const Category = ({ cover = DEFAULT_IMAGE, path, emoji = "?" }) => {
    return(
        <a href={path}>
            <img src={cover} />
            {emoji}
        </a>
    )
}

export { Category };