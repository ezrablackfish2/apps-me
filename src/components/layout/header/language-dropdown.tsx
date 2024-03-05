import React, { useState } from 'react';
import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';

interface LanguageDropdownProps {
    languages: string[]
}

const DropdownContainer = styled.div`
    position: relative;
`;

const LanguageButton = styled.button`
    position: relative;
`;

const ChoosedLanguageImg = styled(StaticImage)`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateX(50%);
    width: 10px;
`;

const LanguageList = styled.ul`
    display: inline-flex;
    flex-direction: column;
    background: ${props => props.theme.gray[400]};
    border-radius: 5px;
    padding: 10px 10px 15px;
`;

const LanguageItem = styled.li`
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const Language = styled.span`
    display: inline-flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.white};
`;

export const LanguageDropdown = (props: LanguageDropdownProps) => {
    const [languages, setLanguages] = useState<string[]>(props.languages);
    const [visibility, setVisibility] = useState<boolean>(false);

    const onLanguageClickHandler = (index: number) => {
        const choosedLang: string[] = languages.splice(index, index + 1);
        setLanguages([...choosedLang, ...languages]);
        setVisibility(false);
    };

    const languagesList = languages.map((lang: string, index: number) => {
        if(index > 0) {
            return (
                <LanguageItem onClick={() => onLanguageClickHandler(index)} 
                              key={index}>
                    <Language>{ lang }</Language>
                </LanguageItem>
            );
        }
    });

    return (
        <DropdownContainer>
            <LanguageButton onClick={() => setVisibility(true)}>
                <Language>{ languages[0] }</Language>
                <ChoosedLanguageImg src="../../../assets/images/arrow_down.png"
                                    alt="arrow-down" />
            </LanguageButton>
            { visibility && <LanguageList>{languagesList}</LanguageList> }
        </DropdownContainer> 
    );
}