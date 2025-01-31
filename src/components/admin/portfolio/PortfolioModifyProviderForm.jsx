import React from 'react'

import { PortfolioModifyProvider } from '../../../context/PortfolioModifyProvider'
import PortfolioModifyForm from './PortfolioModifyForm'

function PortfolioModifyProviderForm() {
    return (
        <PortfolioModifyProvider>
            <PortfolioModifyForm />
        </PortfolioModifyProvider>
    )
}

export default PortfolioModifyProviderForm