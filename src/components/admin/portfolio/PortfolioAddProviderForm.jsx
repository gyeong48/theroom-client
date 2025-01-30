import React from 'react'
import { PortfolioAddProvider } from '../../../context/PortfolioAddProvider'
import PortfolioAddForm from './PortfolioAddForm'

function PortfolioAddProviderForm() {
    return (
        <PortfolioAddProvider>
            <PortfolioAddForm />
        </PortfolioAddProvider>
    )
}

export default PortfolioAddProviderForm