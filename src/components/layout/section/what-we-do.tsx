import React from 'react';
import styled from "styled-components";

import { Chip, Button, Paragraph } from "@components/inputs";
import { SectionHeader, SectionContainer } from "@components/layout";

const DescriptionHeader = styled.h4`
    color: ${props => props.theme.gray[500]};
`;

export const WhatWeDo = () => (
    <SectionContainer>
        <SectionHeader headerText="co robimy" subheaderText="To, co potrafimy robić najlepiej"></SectionHeader>
        <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1">
            <div className="col-span-2 auto-rows-auto">
                <DescriptionHeader className="md:text-xl text-lg leading-7 font-bold mb-12">Co charakteryzuje naszą pracę?</DescriptionHeader>
                <Paragraph className="md:mr-32 mb-12">
                    Działamy w metodyce agile, współpracujemy blisko z klientem, używamy najnowszych technologii, a poszczególne technologie dobieramy do problemu,
                    który będziemy rozwiązywać. Używamy najlepszych praktyk
                    programistycznych, a nasz kod jest przetestowany jednostkowo, e2e oraz
                    integracyjnie. Dbamy o procesy CI i CD, a nasz kod serwujemy w chmurze
                    lub na dedykowanych serwerach aplikacyjnych w zależności od budżetu lub
                    potrzeb klienta.
                </Paragraph>
                <Button variant="link">Dowiedz się więcej</Button>
            </div>
            <div>
                <DescriptionHeader className="md:text-xl text-lg leading-7 font-bold mb-12">Czym się zajmujemy?</DescriptionHeader>
                <div className="flex flex-col items-start">
                    <Chip className="mb-5">Kompletne aplikacje internetowe</Chip>
                    <Chip className="mb-5">Tworzymy API dla zewnętrznych firm</Chip>
                    <Chip className="mb-5">Integrujemy się z zewnętrznymi API</Chip>
                    <Chip className="mb-5">Aplikacje typu PWA</Chip>
                </div>
            </div>
        </div>
    </SectionContainer>
);