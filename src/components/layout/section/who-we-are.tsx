import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import { SectionHeader, SectionContainer } from "@components/layout";
import { Paragraph, Button } from "@components/inputs";
import HeartIcon from '@assets/images/heart.svg';
import ShieldIcon from '@assets/images/shield.svg';
import StarIcon from '@assets/images/star.svg';

const DescriptionHeader = styled.h4`
    font-weight: bold;
    font-size: 25px;
    line-height: 35px;
    color: ${props => props.theme.gray[500]};
    margin-bottom: 40px;
`;

const Highlight = styled.span`
    font-weight: 800;
`;

const IconChipContainer = styled.div`
    display: flex;
    margin: 35px 0;
`;

const IconChip = styled.div`
    display: inline-flex;
    margin-right: 50px;
`;

const IconChipText = styled.span`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: ${props => props.theme.gray[500]};
    margin-left: 15px;
`;

export const WhoWeAre = () => (
    <SectionContainer>
        <SectionHeader headerText="kim jesteśmy" subheaderText="Poznaj nas lepiej"></SectionHeader>
        <div className="grid md:grid-rows-1 md:grid-cols-3">
            <div>
                <StaticImage src="../../../assets/images/who-we-are.png"
                             alt="phones"
                             width={360}
                             height={305} />
            </div>
            <div className="col-span-2 auto-rows-auto mt-12 md:ml-20 md:mt-0">
                <DescriptionHeader>Jesteśmy <Highlight>appsme</Highlight>, czyli...</DescriptionHeader>
                <Paragraph>
                    Jesteśmy grupą zaufanych osób oraz przyjaciół, która z pasji do
                    programowania postanowiła zacząć tworzyć dedykowane
                    oprogramowanie.

                    Mamy wieloletnie doświadczenie w różnych firmach z różnych sektorów, co
                    pozwoliło nam zbudować solidne fundamenty i szerokie horyzonty
                    technologiczne. Uważamy, że ciągły rozwój i pasja w tym co się robi to jedyna
                    słuszna droga żeby być najlepszym i poprzez pracę wnosić wartość do
                    biznesu naszych klientów.
                </Paragraph>
                <IconChipContainer>
                    <IconChip>
                        <HeartIcon />
                        <IconChipText>Pasja do tego, co robimy</IconChipText>
                    </IconChip>
                    <IconChip>
                        <ShieldIcon />
                        <IconChipText>Zaufanie</IconChipText>
                    </IconChip>
                    <IconChip>
                        <StarIcon />
                        <IconChipText>Jakość</IconChipText>
                    </IconChip>
                </IconChipContainer>
                <Button variant="link">Dowiedz się o nas więcej</Button>
            </div>
        </div>
    </SectionContainer>
);