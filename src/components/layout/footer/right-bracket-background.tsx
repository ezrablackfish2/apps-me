import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

const LeftBracket = ({ className }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "left-bracket.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    );

    const imageData = data.desktop.childImageSharp.fluid;

    return (
        <BackgroundImage
            Tag="div"
            className={className}
            fluid={imageData}>
        </BackgroundImage>
    );
};

export const StyledLeftBracket = styled(LeftBracket)`
    position: absolute !important;
    top: -25px;
    left: -50px;
    width: 44px;
    height: 209px;
    background-size: 44px 209px;
`;