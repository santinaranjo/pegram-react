import React, { useRef } from "react";
import { Img, ImgWrapper, Button, Article } from "./syles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

const PhotoCard = ({id, likes = 0, src = DEFAULT_IMAGE}) => {
    const ref = useRef(null)
    const [show, setShow] = React.useState(false)
    const key = `like-${id}`
    const [liked, setLiked] = React.useState(() => {
        try {
            const like = window.localStorage.getItem(key)
            return JSON.parse(like)
        } catch (e) {
            return false
        }
    })

    React.useEffect(() => {
        Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
            ? window.IntersectionObserver
            : import("intersection-observer")
        ).then(() => {
                const observer = new window.IntersectionObserver((entries) => {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        setShow(true)
                        observer.disconnect()
                    }
                })
                observer.observe(ref.current)
            })
    }, [ref])

    const Icon = liked ? MdFavorite : MdFavoriteBorder
    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, value)
            setLiked(value)
        } catch (e) {
            console.error(e)
        }
    }

    return(
        <Article ref={ref}>
            {
                show && <React.Fragment>
                            <a href={`/detail/${id}`}>
                                <ImgWrapper>
                                    <Img src={src} />
                                </ImgWrapper>
                            </a>

                            <Button onClick={() => setLocalStorage(!liked)}>
                                <Icon size="32px" /> {likes} likes!
                            </Button>
                        </React.Fragment>
            }
        </Article>
    )
}

export { PhotoCard }