import React from 'react'
import PortfolioProviderForm from '../../components/admin/portfolio/PortfolioProviderForm'
import MainTitle from '../../components/admin/common/MainTitle'

function PortfolioAddPage() {
    return (
        <div className='pt-40'>
            <MainTitle content={"Portfolio Add"} button={"목록"} path={"../portfolio"}/>
            <PortfolioProviderForm />
        </div>
    )
}

export default PortfolioAddPage