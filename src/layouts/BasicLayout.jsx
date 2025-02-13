import React from 'react'
import Header from '../components/user/Header'
import ScrollToTop from '../components/common/ScrollToTop'
import { Helmet } from 'react-helmet-async'

function BasicLayout({ children }) {
    return (
        <div>
            <Helmet>
                {/* 필수 Open Graph 태그 */}
                <title>TheRoom</title>
                <meta property="og:title" content="더룸" />
                <meta property="og:description" content="맞춤형 인테리어 디자인, 시공 전문. 감각적인 공간 설계와 실용적인 디자인으로 당신의 공간을 완성합니다." />
                <meta property="og:image" content="https://www.theroom.co.kr/assets/logos/og-image.png" />
                <meta property="og:url" content="https://www.theroom.co.kr" />
                <meta property="og:type" content="website" />
            </Helmet>
            <ScrollToTop />
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default BasicLayout