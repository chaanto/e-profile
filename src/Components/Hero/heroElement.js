import styled from 'styled-components';
import LucarioImg from '../../images/lucario.jpg';

export const HeroContainer = styled.div`
    background : transparent;
    display: relative;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 100px;
    position: relative;
    z-index: 1;

    /* add before style */
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

export const ContentBg = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background-image: url(${LucarioImg});
`;