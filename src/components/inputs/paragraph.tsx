import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
    font-weight: normal;
    font-size: 15px;
    line-height: 25px;
    color: ${props => props.theme.gray[600]};
`;

export const Paragraph = props => <StyledParagraph className={props.className}>{props.children}</StyledParagraph>;