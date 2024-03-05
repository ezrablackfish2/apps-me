import React from "react";
import styled from "styled-components";

const Container = styled.section`
    margin-top: 120px;
`;

export const SectionContainer = ({ children, className }) => <Container className={className}>{children}</Container>;
