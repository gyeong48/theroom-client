import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getPortfolioDetail } from '../../api/portfolioApi';
import FetchingModal from '../common/FetchingModal';
import { buildingTypeConverter } from '../../util/typeConverter';

function PortfolioDetailContent() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [portfolioDetail, setPortfolioDetail] = useState(null);
    const [infos, setInfos] = useState(null)
    const host = process.env.REACT_APP_SERVER_URL;

    useEffect(() => {
        getPortfolioDetail(id)
            .then(res => {
                const respnse = res.data;
                setPortfolioDetail(respnse)
                setInfos([
                    { subtitle: "유형", content: buildingTypeConverter(respnse.buildingType) },
                    { subtitle: "면적", content: `공급${respnse.supplyArea}평 / 전용${respnse.exclusiveArea}평` },
                    { subtitle: "준공", content: "0000" },
                    { subtitle: "시공기간", content: `${respnse.diffWeek}주` },
                    { subtitle: "지역", content: respnse.mainAddress },
                ])
            });
    }, [id])

    if (!portfolioDetail) return <FetchingModal />

    return (
        <div className="max-w-6xl mx-auto px-1 md:px-4 pt-2 pb-8">
            {/** 시공 아파트 정보 */}

            <div className='mt-2 shadow-md mb-10'>
                <div className='text-xl font-body font-bold m-4'>{portfolioDetail.title}</div>

                <div className='flex flex-col md:flex-row md:flex-wrap w-full'>
                    {
                        infos.map((info, index) => (
                            <div key={index} className='lg:w-1/3 md:w-1/2 font-body px-4 pb-4'>
                                <div className='inline-block font-semibold text-sm min-[500px]:text-base text-gray-400'>{info.subtitle}</div>
                                <div className='inline-block ml-2 text-sm min-[500px]:text-base'>{info.content}</div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/** 시공후 인테리어 사진 리스트 */}
            <div className="flex flex-col items-center space-y-6">
                {portfolioDetail.portfolioImageFilenames && portfolioDetail.portfolioImageFilenames.map(
                    (filename, index) => (
                        <div
                            key={index}
                            className="w-full max-w-6xl overflow-hidden shadow-md"
                        >
                            <img
                                src={`${host}/api/portfolio/view/${filename}`}
                                alt={`Interior ${index + 1}`}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )
                )}
            </div>

            <div className='flex items-center justify-center mt-6'>
                <button
                    onClick={() => navigate({ pathname: "../portfolio" })}
                    className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 bg-black text-white rounded-md hover:opacity-75 focus:outline-none'
                >
                    목록
                </button>
            </div>
        </div>
    )
}

export default PortfolioDetailContent