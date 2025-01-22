import React from 'react'
import PortfolioList from '../../components/admin/portfolio/PortfolioList'
import MainTitle from '../../components/admin/common/MainTitle'

function PortfolioPage() {
    return (
        <div className='pt-40'>
            <MainTitle content={"Portfolio List"}/>
            <PortfolioList />
        </div>
    )
}

export default PortfolioPage