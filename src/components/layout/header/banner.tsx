import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { Button, Paragraph } from "@components/inputs";
import { ResolutionType } from '@hooks';

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
    color: #${props => props.theme.primary[400]};
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

export const Banner = (props) => (
    <section className="grid grid-rows-1 md:grid-cols-3">
        <TextContainer className="md:col-span-2 auto-rows-auto">
            <Headline>
                Dostarczamy <HighlightedPhrase className="text-primary">dedykowane</HighlightedPhrase><br />
                <HighlightedPhrase> oprogramowanie </HighlightedPhrase>
                dla Twojej firmy
            </Headline>
            <Paragraph>
                Specjalizujemy się głównie w
                aplikacjach i systemach internetowych. Tworzymy oprogramowanie dla firm, supportujemy
                oraz wspomagamy start-up’y w wytwarzaniu oprogramowania.
            </Paragraph>
            <ButtonContainer className="flex mt-12">
                <Button variant="primary" className="action-button md:mr-5">Dowiedz się więcej</Button>
                <Button variant="outlined" className="action-button">Porozmawiajmy o projekcie</Button>
            </ButtonContainer>
        </TextContainer>
        <BackgroundContainer>
            {props.resolutionType === ResolutionType.DESKTOP &&
                <StaticImage src="../../../assets/images/phones.png"
                             alt="phones"
                             width={400}
                             height={480} />
            }
            {props.resolutionType === ResolutionType.MOBILE &&
                <StaticImage src="../../../assets/images/phones.png"
                             alt="phones"
                             width={200}
                             height={240}
                             className="header-mobile-background" />
            }
        </BackgroundContainer>
    </section>
);