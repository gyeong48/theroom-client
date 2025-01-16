import React from 'react'

const images = [
    "/assets/images/image1.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/image3.jpg",
    "/assets/images/image4.jpg",
    "/assets/images/image5.jpg"
]

function PortfolioDetailImageList() {
    return (
        <div className="flex flex-col items-center space-y-6">
            {images.map(
                (image, index) => (
                    <div
                        key={index}
                        className="w-full max-w-6xl overflow-hidden shadow-md"
                    >
                        <img
                            src={image}
                            alt={`Interior ${index + 1}`}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                )
            )}
        </div>
    )
}

export default PortfolioDetailImageList