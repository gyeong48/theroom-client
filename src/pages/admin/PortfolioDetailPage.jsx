import React from 'react'
import PortfolioDetailImageList from '../../components/basic/portfolio/PortfolioDetailImageList'
import PortfolioDetailCard from '../../components/basic/portfolio/PortfolioDetailCard'
import MainTitle from '../../components/admin/common/MainTitle'

function PortfolioDetailPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Portfolio Detail"} button={"목록"} path={"../portfolio"} />
            <div className="max-w-6xl mx-auto px-4 pt-2 pb-8">
                <PortfolioDetailCard />
                <PortfolioDetailImageList />
                {/* 버튼 리스트 화면 고정 형태, 수정, 목록 */}
            </div>
        </div>

    )
}

export default PortfolioDetailPage