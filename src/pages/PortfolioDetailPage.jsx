import React from 'react'
import BasicLayout from '../layouts/BasicLayout'

function PortfolioDetailPage() {
    return (
        <BasicLayout>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className='mt-20 shadow-md mb-10'>
                    {/* 제목 섹션 */}
                    <div className='text-xl font-body font-bold m-4'>송파파인타운1단지 아파트</div>

                    {/* 정보 섹션 */}
                    <div className='flex flex-col md:flex-row md:flex-wrap w-full'>
                        <div className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                            <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-300'>유형</div>
                            <div className='inline-block ml-2 text-sm min-[500px]:text-base'>아파트</div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                            <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-300'>면적</div>
                            <div className='inline-block ml-2 text-sm min-[500px]:text-base'>공급00평 / 전용00평평</div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                            <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-300'>준공</div>
                            <div className='inline-block ml-2 text-sm min-[500px]:text-base'>0000년</div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                            <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-300'>지역</div>
                            <div className='inline-block ml-2 text-sm min-[500px]:text-base'>서울시 송파구 문정동</div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                            <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-300'>시공기간</div>
                            <div className='inline-block ml-2 text-sm min-[500px]:text-base'>0주</div>
                        </div>
                    </div>
                </div>

                {/* 이미지 섹션 */}
                <div className="flex flex-col items-center space-y-6">
                    {["/assets/images/image1.jpg", "/assets/images/image2.jpg", "/assets/images/image3.jpg", "/assets/images/image4.jpg", "/assets/images/image5.jpg"].map(
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
        </BasicLayout>
    )
}

export default PortfolioDetailPage