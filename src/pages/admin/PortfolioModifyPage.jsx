import React from 'react'
import MainTitle from '../../components/admin/common/MainTitle'
import PortfolioModifyProviderForm from '../../components/admin/portfolio/PortfolioModifyProviderForm'

function PortfolioModifyPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Portfolio Modify"} button={"목록"} path={"../portfolio"} />
            <PortfolioModifyProviderForm />
        </div>
    )
}

export default PortfolioModifyPage