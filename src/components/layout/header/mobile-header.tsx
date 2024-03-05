import React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
`;

const Hamburger = styled.label`
    display: flex;
    flex-direction: column;
    width: 52px;
    cursor: pointer;
    z-index: 1;
`;

const HamburgerItem = styled.span`
    background: ${props => props.theme.black};
    border-radius: 10px;
    height: 5px;
    margin: 5px 0;
    transition: .4s cubic-bezier(0.68, -0.6, 0.32, 1.6);

    &:nth-of-type(1) {
        width: 50%;
    }

    &:nth-of-type(2) {
        width: 100%;
    }

    &:nth-of-type(3) {
        width: 75%;
        background: ${props => props.theme.primary[400]};
    }
`;

const Input = styled.input`
    display: none;

    &:checked ~ ${HamburgerItem}:nth-of-type(1) {
        transform-origin: bottom;
        transform: rotatez(45deg) translate(7px, -2px)
    }

    &:checked ~ ${HamburgerItem}:nth-of-type(2) {
        transform-origin: top;
        transform: rotatez(-45deg)
    }

    &:checked ~ ${HamburgerItem}:nth-of-type(3) {
        background: ${props => props.theme.black};
        transform-origin: bottom;
        width: 50%;
        transform: translate(25px, -8px) rotatez(45deg);
    }
`;

const Logo = () => {
    return <StaticImage src="../../../assets/images/logo.png"
                        alt="logo"
                        width={120}
                        height={26} />;
};

export const MobileHeader = (props) => (
    <StyledHeader>
        <Logo />
        <Hamburger onChange={props.toggleMenu} for="check">
            <Input type="checkbox" id="check"/>
            <HamburgerItem></HamburgerItem>
            <HamburgerItem></HamburgerItem>
            <HamburgerItem></HamburgerItem>
        </Hamburger>
    </StyledHeader>
);
