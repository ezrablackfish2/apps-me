import React from "react";
import styled from "styled-components";
import { Form, Formik } from 'formik';

import { Button } from "@components/inputs";
import { Field } from "@components/forms";
import * as Yup from 'yup';

const Fieldset = styled.fieldset`
    width: calc(50% - 25px);

    @media(max-width: 768px) {
        width: auto;
    }
`;

const ContactFormSchema = Yup.object().shape({
    name: Yup.string().required('To pole jest obowiązkowe'),
    surname: Yup.string().required('To pole jest obowiązkowe'),
    email: Yup.string().email('Email jest nieprawidłowy').required('To pole jest obowiązkowe'),
    phone: Yup.number('Numer powinien zawierać tylko cyfry').required('To pole jest obowiązkowe'),
    body: Yup.string().required('To pole jest obowiązkowe'),
});

export const ContactForm = () => {
    return (
        <Formik
            initialValues={{ name: '', surname: '', email: '', phone: '', body: '' }}
            validationSchema={ContactFormSchema}
            onSubmit={
                (values, { validateForm }) => {
                    validateForm(values);
                }
            }
        >
            <Form>
                <div className="md:flex md:justify-between">
                    <Fieldset className="mb-8">
                        <Field name="name" label="Imię" />
                    </Fieldset>
                    <Fieldset className="mb-8">
                        <Field name="surname" label="Nazwisko" />
                    </Fieldset>
                </div>
                <div className="md:flex md:justify-between">
                    <Fieldset className="mb-8">
                        <Field name="email" label="E-mail" />
                    </Fieldset>
                    <Fieldset className="mb-8">
                        <Field name="phone" label="Numer telefonu" />
                    </Fieldset>
                </div>
                <div className="mb-8">
                    <Field  name="body"
                            label="Treść"
                            multiline
                            rows={5}
                            cols={40} />
                </div>
                <Button variant="primary" type="submit">Wyślij wiadomość</Button>
            </Form>
        </Formik>
    );
};