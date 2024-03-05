import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Phone from '@assets/images/phone.svg';
import Envelope from '@assets/images/envelope.svg';

import { Paragraph } from "@components/inputs";

import { StyledLeftBracket } from "./right-bracket-background";
import { StyledRightBracket } from "./left-bracket-background";

const MOCK = {
   menu: {
        title:  'Menu',
        links: [
            {
                to: '/',
                description: 'Co robimy'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
        ]
   },
   links: {
        title:  'Menu',
        links: [
            {
                to: '/',
                description: 'Referencje'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
            {
                to: '/',
                description: 'Co robimy'
            },
        ]
   }
};

const FooterContainer = styled.footer`
    background: ${props => props.theme.gray[400]};
    padding-top: 55px;
    margin-top: 120px;

    @media(max-width: 768px) {
        margin-top: 60px;
    }
`;

const Logo = ({ className }) => {
    return <StaticImage className={className}
                        src="../../../assets/images/logo.png"
                        alt="logo"
                        width={110}
                        height={24} /> 
};

const FooterSectionTitle = styled.span`
    display: block;
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    color: ${props => props.theme.primary[400]};
`;

const StyledLink = styled(Link)`
    font-weight: 700;
`;

const CompanyFooterName = styled.div`
    border-top: 1px solid ${props => props.theme.gray[200]};
    font-size: 14px;
    color: ${props => props.theme.gray[700]};
    text-align: center;
    padding: 35px 0;
`;

const CompanyInfoContainer = styled.div`
    width: 225px;
`;

const StyledParagraph = styled(Paragraph)`
    font-size: 13px;
`;

interface FooterLink {
    to: string;
    description: string;
}

interface LinksListProps {
    title: string;
    links: FooterLink[];
}

const LinksList = (props: LinksListProps) => (
    <div>
        <FooterSectionTitle>{props.title}</FooterSectionTitle>
        <ul>
        {
            props.links.map((link: FooterLink) => (
                <li className="mb-4">
                    <StyledLink to={link.to}>{link.description}</StyledLink>
                </li>
            ))
        }
        </ul>
    </div>
);

export const Footer = (props) => (
    <FooterContainer>
        <div className="container mx-auto">
            <div className="md:grid md:grid-rows-1 md:grid-cols-5 mb-8">
                <div className="md:col-span-2 md:pr-24">
                    <Logo className="mb-10"/>
                    <div>
                        <FooterSectionTitle>Software Solutions</FooterSectionTitle>
                        <StyledParagraph>
                            Dostarczanie dedykowanego oprogramowania. Specjalizujemy się głównie w
                            aplikacjach i systemach internetowych. Tworzymy oprogramowanie dla firm, supportujemy
                            oraz wspomagamy start-up’y w wytwarzaniu oprogramowania.
                        </StyledParagraph>
                    </div>
                </div>
                <div className="md:col-span-3 md:grid md:grid-rows-1 md:grid-cols-3">
                    {props.isDesktop && <LinksList {...MOCK.menu} />}
                    {props.isDesktop && <LinksList {...MOCK.links} />}
                    <CompanyInfoContainer className="relative text-sm">
                        {props.isDesktop && <StyledLeftBracket />}
                        {props.isDesktop && <StyledRightBracket />}
                        <FooterSectionTitle>Appsme Software Solutions</FooterSectionTitle>
                        <address className="block mb-6">
                            <span className="block">ul. Symboliczna 3/31</span>
                            <span className="block">01-252 Warszawa</span>
                        </address>
                        <div>
                            <span className="flex items-center block">
                                <Envelope className="mr-4" />
                                <span>contact@appsme.io</span>
                            </span>
                            <span className="flex items-center block">
                                <Phone className="mr-4" />
                                <a href="tel:+48662483248">+48 662 483 248</a>
                            </span>
                        </div>
                    </CompanyInfoContainer>
                </div>
            </div>
            <CompanyFooterName>2021 Appsme</CompanyFooterName>
        </div>
    </FooterContainer>
);