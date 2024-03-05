import React from 'react';

import { ResolutionType } from '@hooks';
import { BackgroundContainer, ButtonContainer, TextContainer } from './base-baner.styles';

export interface BaseBannerProps {
    header: HTMLElement;
    description: HTMLElement;
    buttons: HTMLElement;
    backgroundImage: HTMLElement;
    resolutionType: ResolutionType;
};

export const BaseBanner = (props: BaseBannerProps) => (
    <section className="grid grid-rows-1 md:grid-cols-3">
        <TextContainer className="md:col-span-2 auto-rows-auto">
            { props.header }
            { props.description }
            { props.buttons &&
                <ButtonContainer className="flex mt-12">
                    { props.buttons }
                </ButtonContainer>
            }
        </TextContainer>
        { props.backgroundImage &&
            <BackgroundContainer>
                { props.backgroundImage }
            </BackgroundContainer>
        }
    </section>
);