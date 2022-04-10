import styled from 'styled-components';


export const HeroContainer = styled.div`
    background : white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top:0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    @media screen and (max-width: 768px) {
        height: 400px;
    }

    @media screen and (max-width: 480px) {
        height: 250px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ContentBg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    -o-object-fit: fill;
    background: #232a44;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroTitle = styled.div`
    color: black;
    font-size: 64px;
    text-align: center;
    left: -30%;
    float: left;
    position: relative;

    @media screen and (max-width: 1024px) {
        font-size: 48px;
        left: -30%;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
        left: -30%;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
        left: -30%;
    }
`;
export const HeroP = styled.p`
    margin-top: 0px;
    color: grey;
    font-size: 30px;
    max-width: 600px;
    left: -47%;
    position: relative;
    


    @media screen and (max-width: 1024px) {
        font-size: 26px;
        left: -17%;
    }


    @media screen and (max-width: 768px) {
        font-size: 24px;
        left: -38%;
    }

    @media screen and (max-width: 480px) {
        font-size: 14px;
        left: -20%;
    }

`;


export const HeroLogo = styled.a`
    color: black;
    padding: 5px 15px 0px 0px;
    font-size: 30px;

    @media screen and (max-width: 768px) {
        font-size: 25px;

        &:hover {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

    &:hover {
        font-size: 35px;
    }

`;

export const HeroLogoAdjuster = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-items: center;
    justify-content: center;
    position: relative;
    left: -69%;

    @media screen and (max-width: 1024px) {
        left: 10%;
    }

    @media screen and (max-width: 768px) {
        left: -65%;
    }

    @media screen and (max-width: 480px) {
        left: 7%;
    }

`;


export const HerocontentFooter = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    font-size: 30px;
    direction: rtl;
`;

export const HeroImg = styled.img`
    width: 30%;
    height: 30%;
`;

export const HeroWrapper = styled.div`

`;