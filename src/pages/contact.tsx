import React from 'react';

import { Theme, BaseBanner } from '@components/layout';
import { ResolutionType, useWindowResolutionType } from '@hooks';
import { Button, Paragraph } from "@components/inputs";

import { Headline, HighlightedPhrase } from '../components/layout/header/base-banner/base-baner.styles';
import styled from 'styled-components';

const EzraContainer = styled.div`
    display: block;
    font-size: 18px;
    color: #333; 
    margin-bottom: 0px;
    height: 476px;
	border-width: 0px, 0px, 0px, 0px;
	border-style: solid;
	border-color: #E0E3F3;
`;
const StyledInput1 = styled.input`
    width: 46%;
    height: 66px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
    outline: none;
`;

const StyledInput2 = styled.input`
    width: 46%;
    height: 66px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
    outline: none;
    margin-left: 6.7%;
`;

const WhoWeArePage = () => {
    const resolutionType: ResolutionType = useWindowResolutionType();

    return (
        <Theme>
            <BaseBanner
                header={
                    <Headline>
		    	Skontaktuj się <HighlightedPhrase className="text-primary">z nami </HighlightedPhrase> w celu
<HighlightedPhrase> omówienia </HighlightedPhrase>szczegółów nowego projektu

                    </Headline>
                }
                description={
                    <Paragraph>
                        Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym.
                    </Paragraph>
                }
		description={
			<>
			<EzraContainer>
				<StyledInput1 type="text" placeholder="Imię" />
				<StyledInput2 type="text" placeholder="Nazwisko" />
			<Button variant="primary" className="action-button md:mr-5">Wyślij wiadomość</Button>
			</EzraContainer>
			
			</>
		}
                buttons={
		    <>
		    
		    </>
                }
            />
	    
        </Theme>
    );
}

export default WhoWeArePage;
