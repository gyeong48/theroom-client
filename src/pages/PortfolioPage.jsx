import React from 'react'
import BasicLayout from '../layouts/BasicLayout'
import PortfolioList from '../components/portfolio/PortfolioList'
import SubTitle from '../components/common/SubTitle'

function PortfolioPage() {
    return (
        <BasicLayout>
            <div className="mx-auto px-4 py-8">
                <SubTitle content={"PORTFOLIO"} />
                <PortfolioList />
            </div>
        </BasicLayout>
    )
}

export default PortfolioPage