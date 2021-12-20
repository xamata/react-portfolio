import React from 'react'
import { SocialLogoImage } from '../Footer/FooterElements'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements'
import Logo from '../../images/mm_design.png'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/react-portfolio'>
                        <SocialLogoImage src={Logo} />
                    </Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlfor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password?</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
