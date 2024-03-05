import * as React from "react";
import styled from "styled-components";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import { SectionHeader, SectionContainer, Project } from "@components/layout";

const StyledSectionContainer = styled(SectionContainer)`
    margin-bottom: 110px;
`;

const CompletedProjectsContainer = styled.div`
    display: flex;
    background: ${props => props.theme.gray[400]};
    padding: 20px 15px;
    overflow: hidden;
    justify-content: space-around;
`;

const ProjectsButton = styled.button`
    background-color: ${props => props.theme.gray[400]};
    display: block;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.2em;
    color: ${props => props.theme.gray[100]};
    text-align: center;
    padding: 15px;
    width: 100%;
    text-transform: uppercase;
    transition: background ease-in-out .35s;
    margin-top: 5px;

    &:hover {
        opacity: .8;
    }
`;

export const CompletedProjects = () => {
    const [currentSlideIndex, setSlideIndex] = React.useState(0);
    const ProjectButtonClickHandler = () => setSlideIndex(currentSlideIndex + 1);

    return (
        <StyledSectionContainer>
            <SectionHeader  headerText="zrealizowane projekty"
                            subheaderText="Zobacz nasze umiejętności na żywo">        
            </SectionHeader>
            <CompletedProjectsContainer>
                <Carousel
                    value={currentSlideIndex}
                    onChange={(index: number) => setSlideIndex(index)}
                    itemWidth={380}
                    offset={50}
                    plugins={[
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 3
                            }
                        },
                    ]}
                >
                    <Project companyName="Microsoft"></Project>
                    <Project companyName="Google"></Project>
                    <Project companyName="Oracle"></Project>
                </Carousel>
            </CompletedProjectsContainer>
            <ProjectsButton onClick={ProjectButtonClickHandler}>przewijaj dalej</ProjectsButton>
        </StyledSectionContainer>
    );
};