import styled from "styled-components";

const Headline = styled.h2`
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 52px;
    color: ${props => props.theme.gray[500]};
    margin-bottom: 35px;

    @media (max-width: 768px) {
        font-size: 32px;
        line-height: 38px;
    }
`;

const HighlightedPhrase = styled.span`
    color: ${props => props.theme.primary[400]};
`;

const ButtonContainer = styled.div`
    @media (max-width: 768px) {
        flex-direction: column;

        .action-button {
            max-width: 280px;

            &:first-child {
                margin-bottom: 20px;
            }
        }
    }
`;

const TextContainer = styled.div`
    margin-top: 50px;

    @media (max-width: 768px) {
        margin-top: 25px;
    }
`;

const BackgroundContainer = styled.div`
    .header-mobile-background {
        position: absolute;
        right: 0;
        margin-top: -400px;
        z-index: -1;
    }
`;

export { 
    Headline, HighlightedPhrase, ButtonContainer, TextContainer, BackgroundContainer
};