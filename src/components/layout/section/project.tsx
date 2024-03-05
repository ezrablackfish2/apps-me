import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image';

import { Button } from '@components/inputs';

interface ProjectProps {
    companyName: string;
    projectUrl: string;
    imageUrl: string;
    className: string;
}

const ProjectInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.theme.primary[500]};
    opacity: 0.9;
    padding-left: 25px;
    border-radius: 5px;
    width: 280px;
    height: 100px;
    position: absolute;
    bottom: 20px;
    right: -30px;
`;

const CompanyName = styled.span`
    font-weight: 800;
    font-size: 20px;
    line-height: 24px;
    color: ${props => props.theme.white};
    margin-bottom: 15px;
`;

const ViewButton = styled(Button)`
    color: ${props => props.theme.white};
    stroke: ${props => props.theme.white};
`;

const BackgroundSection = ({ className, children }) => {
    const data = useStaticQuery(
      graphql`
        query {
          desktop: file(relativePath: { eq: "projekt.png" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    );

    const imageData = data.desktop.childImageSharp.fluid

    return (
      <BackgroundImage
        Tag="div"
        className={className}
        fluid={imageData}
        backgroundColor={`${props => props.theme.gray[400]}`}
      >
        {children}
      </BackgroundImage>
    )
}

const StyledProject = styled(BackgroundSection)`
    position: relative;
    width: 380px;
    height: 320px;
    border-radius: 5px;
    background-position: bottom center;
    background-repeat: repeat-y;
    background-size: cover;
`;

export const Project = (props: ProjectProps) => (
    <StyledProject>
        <ProjectInfoBox>
            <CompanyName>{props.companyName}</CompanyName>
            <Button variant="link">Podgląd</Button>
        </ProjectInfoBox>
    </StyledProject>
);