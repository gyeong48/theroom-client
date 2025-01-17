import React from 'react'
import PortfolioDetailImageList from '../../components/basic/portfolio/PortfolioDetailImageList'
import PortfolioDetailCard from '../../components/basic/portfolio/PortfolioDetailCard'

function PortfolioDetailPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <PortfolioDetailCard />
            <PortfolioDetailImageList />
            {/* 버튼 리스트 화면 고정 형태, 수정, 목록 */}
        </div>
    )
}

export default PortfolioDetailPage