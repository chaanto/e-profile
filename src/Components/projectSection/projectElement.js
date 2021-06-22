import styled from 'styled-components';

export const ProjectContainer = styled.div `
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 25rem));
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0,2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 64px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        padding-top: 20px;
    }
    
    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: #fff;
`;

export const ProjectP = styled.p`
    font-size: 1rem;
    margin-bottom: 10px;
    color:white;
    text-align: center;
`;