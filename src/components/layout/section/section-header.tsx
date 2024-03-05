import React from "react";
import styled from "styled-components";

interface HeaderSectionProps {
    headerText: string;
    subheaderText: string;
    className?: string;
}

const Header = styled.h2`
    font-weight: bold; 
    letter-spacing: 0.2em;
    color: ${props => props.theme.primary[400]};
    text-transform: uppercase;
`;

const SubHeader = styled.h3`
    font-weight: bold;
    color: ${props => props.theme.gray[500]};
`;

export const SectionHeader = (props: HeaderSectionProps) => (
    <div className={`mb-12 md:mb-20 ${props.className}`}>
        <Header className="md:text-lg text-sm md:leading-8 leading-6">
            { props.headerText }
        </Header>
        <SubHeader className="md:text-4xl text-xl md:leading-10 leading-6">
            { props.subheaderText }
        </SubHeader>
    </div>
);
