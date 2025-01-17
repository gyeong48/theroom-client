import React from 'react'
import PortfolioList from '../../components/admin/portfolio/PortfolioList'
import SubTitle from '../../components/admin/common/SubTitle'

function PortfolioPage() {
    return (
        <div className='pt-40'>
            <SubTitle content={"Portfolio List"}/>
            <PortfolioList />
        </div>
    )
}

export default PortfolioPage