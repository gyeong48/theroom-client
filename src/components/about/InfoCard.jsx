import React from 'react'
import InfoItem from './InfoItem'

function InfoCard() {
    return (
        <div className='pt-10'>
            <ul>
                <InfoItem title={"대표자"} content={"이지환"} />
                <InfoItem title={"주소"} content={"서울시 송파구 장지동 송파파인타운1단지 301호"} />
                <InfoItem title={"이메일"} content={"example@example.com"} />
                <InfoItem title={"연락처"} content={"010-0000-0000"} />
            </ul>
        </div>
    )
}

export default InfoCard