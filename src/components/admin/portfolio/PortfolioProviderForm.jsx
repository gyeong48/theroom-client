import React from 'react'
import { PortfolioProvider } from '../../../context/PortfolioProvider'
import PortfolioForm from './PortfolioForm'

function PortfolioProviderForm() {
    return (
        <PortfolioProvider>
            <PortfolioForm />
        </PortfolioProvider>
    )
}

export default PortfolioProviderForm