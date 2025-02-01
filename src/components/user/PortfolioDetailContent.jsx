import React from 'react'
import { useNavigate } from 'react-router-dom';

const infoItems = [
    { subtitle: "유형", content: "아파트" },
    { subtitle: "면적", content: "공급00평 / 전용00평평" },
    { subtitle: "준공", content: "0000년" },
    { subtitle: "지역", content: "서울시 송파구 문정동" },
    { subtitle: "시공기간", content: "0주" },
]

const images = [
    "/assets/images/image1.jpg",
    "/assets/images/image2.jpg",
    "/assets/images/image3.jpg",
    "/assets/images/image4.jpg",
    "/assets/images/image5.jpg"
]

function PortfolioDetailContent() {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-1 md:px-4 pt-2 pb-8">
            {/** 시공 아파트 정보 */}

            <div className='mt-2 shadow-md mb-10'>
                <div className='text-xl font-body font-bold m-4'>송파파인타운1단지 아파트</div>

                <div className='flex flex-col md:flex-row md:flex-wrap w-full'>
                    {
                        infoItems.map((infoItem, index) => (
                            <div key={index} className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                                <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-400'>{infoItem.subtitle}</div>
                                <div className='inline-block ml-2 text-sm min-[500px]:text-base'>{infoItem.content}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/** 시공후 인테리어 사진 리스트 */}
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
        </div>
    )
}

export default PortfolioDetailContent