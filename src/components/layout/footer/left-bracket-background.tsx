import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from 'gatsby-background-image';

const RightBracket = ({ className }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "right-bracket.png" }) {
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

export const StyledRightBracket = styled(RightBracket)`
    position: absolute !important;
    top: -25px;
    right: -50px;
    width: 44px;
    height: 209px;
    background-size: 44px 209px;
`;