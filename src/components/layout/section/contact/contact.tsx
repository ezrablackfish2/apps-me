import React from "react";

import { SectionHeader, SectionContainer } from "@components/layout";
import { Paragraph } from "@components/inputs";
import { SocialLinks } from "../social-links";
import { ContactForm } from "./contact-form";

export const Contact = () => (
    <SectionContainer>
        <div className="grid md:grid-rows-1 md:grid-cols-2">
            <div className="mr-16">
                <SectionHeader headerText="kontakt"
                               subheaderText="Napisz do nas, porozmawiajmy o projekcie">
                </SectionHeader>
                <Paragraph>
                    Lorem Ipsum jest tekstem stosowanym jako przykładowy
                    wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
                    nieznanego drukarza do wypełnienia tekstem próbnej książki.
                </Paragraph>
                <SocialLinks className="mt-6 mb-6 md:mt-16" />
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
    </SectionContainer>
);
