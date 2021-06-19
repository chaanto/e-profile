import React from 'react';
import { HeroContainer, HeroContent, HeroTitle, HeroP, HeroLogo, HeroLogoAdjuster, HeroImg, HerocontentFooter, HeroWrapper } from './heroElement';
import Typical from 'react-typical';
import { HeroData } from '../heroData';
import CharlieBW from '../../images/charlie-bw-ver.png'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroTitle>
                    Charlie Aprilianto 
                </HeroTitle>
                <HeroP>
                    a
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={[
                        ' Front-end Developer.',
                        4000,
                        ]}
                    />
                </HeroP>
                <HeroLogoAdjuster>
                    {HeroData.map((item, index) => {
                        return (
                        <HeroWrapper key={index}>
                            <HeroLogo href={item.href} target="_blank" rel="noreferrer">
                                {item.icon}
                            </HeroLogo>
                        </HeroWrapper>
                        );
                    })}
                </HeroLogoAdjuster>
            </HeroContent>
            <HerocontentFooter>
                <HeroImg src={CharlieBW}/>
            </HerocontentFooter>
        </HeroContainer>
    )
}

export default HeroSection
