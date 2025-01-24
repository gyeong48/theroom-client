import React from 'react'
import PortfolioImageList from '../../components/admin/portfolio/PortfolioImageList'
import MainTitle from '../../components/admin/common/MainTitle'

function PortfolioPage() {
    return (
        <div className='pt-20'>
            <MainTitle content={"Portfolio List"} button={"등록"} path={"./add"} />
            <PortfolioImageList />
        </div>
    )
}

export default PortfolioPage