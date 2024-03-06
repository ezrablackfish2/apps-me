import React from 'react';

import { Theme, BaseBanner } from '@components/layout';
import { ResolutionType, useWindowResolutionType } from '@hooks';
import { Button, Paragraph } from "@components/inputs";

import { Headline, HighlightedPhrase } from '../components/layout/header/base-banner/base-baner.styles';
import styled from 'styled-components';
import map from "../../public/image/map.png";

const EzraContainer = styled.div`
    display: inline-block;
    width: 54.5%;
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
    margin-bottom: 35px;
    outline: none;
`;

const StyledInput2 = styled.input`
    width: 46%;
    height: 66px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 35px;
    outline: none;
    margin-left: 6.7%;
	
`;

const StyledInput3 = styled.input`
    display: inline-block;
    position: realtive;
    width: 100%;
    height: 168px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 35px;
    outline: none;
    vertical-align: top;
    line-height: 168px;
    text-align: top;
    justify-content: top;
    align-items: top;

    &::placeholder {
    position: absolute;
    top: 30px;
  }
`;

const StyledImagePreview = styled.img`
  display: inline-block;
  position: relative;
  width: 40%; 
  height: 477.83px;
  object-fit: cover; 
  border-radius: 5px; 
  border: 1px solid #ccc;
`;

const WhoWeArePage = () => {
    const resolutionType: ResolutionType = useWindowResolutionType();

    return (
    	<>
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
			description={<>
			
			
			</>
			}
                buttons={
		    <>
		    
		    </>
                }
            />
	    <EzraContainer>
				<StyledInput1 type="text" placeholder="Imię" />
				<StyledInput2 type="text" placeholder="Nazwisko" />
				<StyledInput1 type="text" placeholder="Imię" />
				<StyledInput2 type="text" placeholder="Nazwisko" />
				<StyledInput3 type="text" placeholder="Imię" />
			<Button variant="primary" className="action-button md:mr-5">Wyślij wiadomość</Button>
			</EzraContainer>

			<StyledImagePreview src={map} />
	    
        </Theme>
	</>
    );
}

export default WhoWeArePage;
