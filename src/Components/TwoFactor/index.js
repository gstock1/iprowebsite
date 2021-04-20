import React from 'react';
import {Container, FormWrap, Icon, FormContent, Form, FormH1, FormP2, FormLabel, FormInput, FormButton, Text, CreateButton} from './TwoFactorElement';

const TwoFactor = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">IPRO GROUP CHARLIE</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Two-Factor Authentication</FormH1>
                            <FormP2>Enter the six-digit code from your texts or email.</FormP2>
                            <FormLabel htmlFor='for'>Six-Digit Code</FormLabel>
                            <FormInput type='password' required />
                            <FormButton to='/'>Continue</FormButton>
                            <Text>Didn't Recieve the Code?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>

        </>

    )
}

export default TwoFactor