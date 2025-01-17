import React from 'react'
import SubTitle from '../../components/admin/common/SubTitle'
import PortfolioProviderForm from '../../components/admin/portfolio/PortfolioProviderForm'

function PortfolioAddPage() {
    return (
        <div className='pt-40'>
            <SubTitle content={"Portfolio Add"} />
            <PortfolioProviderForm />
        </div>
    )
}

export default PortfolioAddPage