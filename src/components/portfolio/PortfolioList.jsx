import React from 'react'
import ImageCard from './ImageCard'

const items = [
    { id: 1, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 2, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 3, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 4, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 5, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 6, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 7, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 8, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 9, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 10, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 11, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 12, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 13, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 14, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 15, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 16, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 17, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 18, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 19, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 20, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 21, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" },
    { id: 22, url: "/assets/images/image4.jpg", title: "Lorem ipsum gomet, hites" }
]

function PortfolioList() {
    return (
        <div className='pt-10 flex flex-wrap items-center'>
            {items.map((item, index) => (
                <div className='md:px-10 px-1 pb-8 md:w-1/3 md:h-1/3' key={index}>
                    <ImageCard id={item.id} url={item.url} title={item.title} />
                </div>
            ))}
        </div>
    )
}

export default PortfolioList