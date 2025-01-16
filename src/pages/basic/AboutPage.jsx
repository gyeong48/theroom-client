import React from 'react'
import BasicLayout from '../../layouts/BasicLayout'
import SubTitle from '../../components/basic/common/SubTitle'
import InfoCard from '../../components/basic/about/InfoCard'
import Location from '../../components/basic/about/Location'
import IntroContent from '../../components/basic/about/IntroContent'

function AboutPage() {
    return (
        <BasicLayout>
            <div className="max-w-3xl mx-auto px-4 py-8">
                <SubTitle content={"ABOUT"} />
                <IntroContent />
                <Location />
                <InfoCard />
            </div>
        </BasicLayout>
    )
}

export default AboutPage