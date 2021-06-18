import React from 'react';
import { HeroContainer, HeroContent, HeroTitle, HeroP, HeroLogo, HeroLogoAdjuster } from './heroElement';
import Typical from 'react-typical';
import { HeroData } from '../heroData';

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
                    {HeroData.map((item) => {
                        return (
                            <HeroLogo href={item.href} target="_blank" rel="noreferrer">
                                {item.icon}
                            </HeroLogo>
                        );
                    })}
                </HeroLogoAdjuster>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
