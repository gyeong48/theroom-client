import React from 'react'
import PortfolioAddProviderForm from '../../components/admin/portfolio/PortfolioAddProviderForm'
import MainTitle from '../../components/admin/common/MainTitle'

function PortfolioAddPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Portfolio Add"} button={"목록"} path={"../portfolio"} />
            <PortfolioAddProviderForm />
        </div>
    )
}

export default PortfolioAddPage