import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, BtnWrap, BtnWrapper, BtnLogo} from './InfoElement';
import { Button } from '../buttonElement';

function InfoSection({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, buttonLogo}) {

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrapper>
                                    <BtnWrap>
                                        <Button href="https://api.whatsapp.com/send?phone=6281277647785"
                                        target="_blank" 
                                        rel="noreferrer"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={80}
                                        primary={ primary ? 1 : 0}
                                        dark={dark ? 1: 0}
                                        ><BtnLogo>{buttonLogo[0]}</BtnLogo> {buttonLabel[0]}</Button>
                                    </BtnWrap>
                                    <BtnWrap>
                                        <Button href="mailto:dev.charlieaprilianto@gmail.com"
                                        target="_blank" 
                                        rel="noreferrer"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={80}
                                        primary={ primary ? 1 : 0}
                                        dark={dark ? 1: 0}
                                        ><BtnLogo>{buttonLogo[1]}</BtnLogo> {buttonLabel[1]}</Button>
                                    </BtnWrap>
                                </BtnWrapper>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
