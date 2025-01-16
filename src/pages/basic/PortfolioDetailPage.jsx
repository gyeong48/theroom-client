import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import PortfolioDetailImageList from '../../components/basic/portfolio/PortfolioDetailImageList'
import PortfolioDetailCard from '../../components/basic/portfolio/PortfolioDetailCard'

function PortfolioDetailPage() {
    return (
        <BasicLayout>
            <div className="max-w-6xl mx-auto px-4 py-8">
                <PortfolioDetailCard />
                <PortfolioDetailImageList />
                {/* 버튼 리스트 */}
            </div>
        </BasicLayout>
    )
}

export default PortfolioDetailPage