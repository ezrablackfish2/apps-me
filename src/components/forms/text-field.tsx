import React, { useState , useRef, MutableRefObject } from "react";
import styled, { css } from "styled-components";
import { useField } from "formik";

const InputContainer = styled.div`
    position: relative;
`;

const BaseStyle = css`
    font-size: 15px;
    display: block;
    background: transparent;
`;

const BaseStyleInput = css`
    ${BaseStyle}
    padding: 15px 25px;
    border: 1.5px solid ${props => (props.hasError ? props.theme.red[100] : props.theme.gray[100])};
    border-radius: 5px;
    color: ${props => props.theme.gray[100]};
    overflow: hidden;
    position: relative;
    width: 100%;
    outline: none;
`;

const Label = styled.label`
    ${BaseStyle}
    background-color: ${props => props.theme.white};
    color: ${props => (props.hasError ? props.theme.red[100] : props.theme.gray[100])};
    font-weight: normal;
    top: 15px;
    left: 15px;
    padding: 0 10px;
    margin: 0;
    position: absolute;
    transition: all ease-in-out .25s;
    transform: ${props => (props.active ? 'translateY(-25px)' : 'none')};

    :hover {
        cursor: text;
    }
`;

const Input = styled.input`
    ${BaseStyleInput}
`;

const Textarea = styled.textarea`
    ${BaseStyleInput}
`;

const ErrorMessage = styled.span`
    font-size: 13px;
    color: ${props => props.theme.red[100]};
    margin-top: 3px;
    margin-left: 3px;
`;

interface TextFieldProps {
    value: string;
    onChange: Function,
    label: string;
    name: string;
    type: string;
    multiline: boolean;
    className: string;
    hasError: boolean;
    rows?: number;
    cols?: number;
}

interface BaseTextFieldProps {
    value: string
    label: string;
    name: string;
    isActive: boolean;
    hasError: boolean;
    fieldRef: React.MutableRefObject<HTMLInputElement>;
    onChange: Function,
    onFocus: Function,
    onBlur: Function,
    onLabelClick: Function,
    className: string;
}

interface InputProps extends BaseTextFieldProps {
    type: string;
}

interface TextareaProps extends BaseTextFieldProps {
    rows?: number;
    cols?: number;
}

const InputField = (props: InputProps) => (
    <InputContainer className={props.className}>
        <Input  {...props} ref={props.fieldRef} />
        <Label  active={props.isActive}
                hasError={props.hasError}
                onClick={props.onLabelClick}>
            {props.label}
        </Label>
    </InputContainer>
);

const TextareaField = (props: TextareaProps) => {
    return (
        <InputContainer className={props.className}>
            <Textarea {...props} ref={props.fieldRef}>
                {props.value}
            </Textarea>
            <Label active={props.isActive}
                   hasError={props.hasError}
                   onClick={props.onLabelClick}>{props.label}</Label>
        </InputContainer>
    );
};

const TextField = (props: TextFieldProps) => {
    const [isActive, setActive] = useState<boolean>(false);
    const fieldRef: MutableRefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

    const onFocusHandler = () => setActive(true);

    const onBlurHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.value.length === 0) {
            setActive(false);
        }
    };

    const onLabelClickHandler = () => {
        fieldRef.current.focus();

        if(props.value.length === 0) {
            setActive(true);
        }
    };

    if (props.multiline) {
        return <TextareaField {...props}
                              isActive={isActive}
                              fieldRef={fieldRef}
                              onFocus={onFocusHandler}
                              onBlur={onBlurHandler}
                              onLabelClick={onLabelClickHandler} />;
    }

    return <InputField  {...props}
                        isActive={isActive}
                        fieldRef={fieldRef}
                        onFocus={onFocusHandler}
                        onBlur={onBlurHandler}
                        onLabelClick={onLabelClickHandler} />;
}

const Field = (props) => {
    const [field, meta] = useField(props);

    return (
        <>
            <TextField {...props} {...field} hasError={meta.error && meta.touched} />
            { meta.error && meta.touched && <ErrorMessage>{meta.error}</ErrorMessage>}
        </>
    );
};

export { Field };