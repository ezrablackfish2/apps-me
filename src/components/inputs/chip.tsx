import React from "react";
import styled from "styled-components";

const StyledChip = styled.span`
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary[500]};
    border-radius: 20px;
    padding: 6px 12px;
`;

export const Chip = props => <StyledChip className={props.className}>{props.children}</StyledChip>;