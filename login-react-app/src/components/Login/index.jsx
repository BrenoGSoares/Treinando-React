import { useState, useEffect } from 'react';
import { MainContainer, SecundaryContainer, ImgLogin, ListButton, Form } from './styles'

import figBlack from '../../assets/img-login-black.jpg';
import figWhite from '../../assets/img-login-white.jpg';

export default function Login() {
    const [theme, setTheme] = useState(false);
    const [option, setOption] = useState(false)

    const changeOption = (x) => {
        if (x == 'l') {
            setOption(false)
        } else {
            setOption(true)
        }
    }

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(darkModeMediaQuery.matches)

        const handleChange = () => setTheme(darkModeMediaQuery.matches);
        darkModeMediaQuery.addEventListener('change', handleChange);

        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);


    return (
        <MainContainer>
            <ImgLogin src={theme ? figBlack : figWhite} alt="" />
            <SecundaryContainer>
                <h1>Sistema de Login</h1>
                <ListButton>
                    <li onClick={() => changeOption('l')}>Login</li>
                    <li onClick={() => changeOption('s')}>SignUp</li>
                </ListButton>
                <Form action="">
                    <label htmlFor="email"></label>
                    <input type="text" name="email" id="email" placeholder='Enter your Email' />
                    <label htmlFor="password"></label>
                    <input type="text" name="password" id="password" placeholder='Enter your Password' />
                    <button type='button'>{option ? 'Sign Up' : 'Login'}</button>
                </Form>
            </SecundaryContainer>
        </MainContainer>
    );
}
