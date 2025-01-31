import React from 'react'
import PortfolioDetailImageList from '../../components/basic/portfolio/PortfolioDetailImageList'
import PortfolioDetailCard from '../../components/basic/portfolio/PortfolioDetailCard'
import MainTitle from '../../components/admin/common/MainTitle'
import { useNavigate } from 'react-router-dom'

function PortfolioDetailPage() {
    const navigate = useNavigate();
    return (
        <div className='pt-20'>
            <MainTitle content={"Portfolio Detail"} button={"목록"} path={"../portfolio"} />
            <div className="max-w-6xl mx-auto px-1 md:px-4 pt-2 pb-8">
                <PortfolioDetailCard />
                <PortfolioDetailImageList />
                <div className='flex items-center justify-center mt-6'>
                    <button
                        onClick={() => navigate({ pathname: "./modify" })}
                        className='text-xs px-4 py-2 lg:text-base lg:px-6 lg:py-2 bg-black text-white rounded-md hover:opacity-75 focus:outline-none'
                    >
                        수정
                    </button>
                </div>
            </div>
        </div>

    )
}

export default PortfolioDetailPage