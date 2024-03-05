import React from 'react';

import { Theme, BaseBanner } from '@components/layout';
import { ResolutionType, useWindowResolutionType } from '@hooks';
import { Button, Paragraph } from "@components/inputs";

import { Headline, HighlightedPhrase } from '../components/layout/header/base-banner/base-baner.styles';

const WhoWeArePage = () => {
    const resolutionType: ResolutionType = useWindowResolutionType();

    return (
        <Theme>
            <BaseBanner
                header={
                    <Headline>
                        Kompleksowe <HighlightedPhrase className="text-primary">rozwiązania</HighlightedPhrase> i<br />
                        <HighlightedPhrase> najnowocześniejsze technologię </HighlightedPhrase>
                        dostępne na rynku
                    </Headline>
                }
                description={
                    <Paragraph>
                        Tworzymy dedykowane oprogramowanie, które rozwiązuje problemy
                        biznesowe naszych klientów lub optymalizuje ich procesy. Tworzymy
                        oprogramowanie dla każdej wielkości firmy,
                    </Paragraph>
                }
                buttons={
                    <Button variant="primary" className="action-button md:mr-5">Zamów darmową wycenę projektu</Button>
                }
            />
        </Theme>
    );
}

export default WhoWeArePage;