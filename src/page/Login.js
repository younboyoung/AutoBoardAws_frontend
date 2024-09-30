import React, {useEffect, useState} from 'react';
import {
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    TextField,
    InputAdornment,
    Link,
    IconButton,
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const providers = [{ id: 'credentials', name: 'Email and Password' }];

function CustomEmailField() {
    return (
        <TextField
            id="input-with-icon-textfield"
            label="Email Address"
            name="email"
            type="email"
            size="small"
            required
            fullWidth
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle fontSize="inherit" />
                        </InputAdornment>
                    ),
                },
            }}
            variant="outlined"
        />
    );
}

function CustomPasswordField() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <FormControl sx={{ my: 2 }} fullWidth variant="outlined">
            <InputLabel size="small" htmlFor="outlined-adornment-password">
                Password
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                size="small"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            size="small"
                        >
                            {showPassword ? (
                                <VisibilityOff fontSize="inherit" />
                            ) : (
                                <Visibility fontSize="inherit" />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                label="Password"
            />
        </FormControl>
    );
}

function CustomButton() {
    return (
        <Button
            type="submit"
            variant="outlined"
            color="info"
            size="small"
            disableElevation
            fullWidth
            sx={{ my: 2 }}
        >
            Sign In
        </Button>
    );
}

function SignUpLink() {
    return (
        <Link href="/signup" variant="body2">
            Sign up
        </Link>
    );
}

// function ForgotPasswordLink() {
//     return (
//         <Link href="/" variant="body2">
//             Forgot password?
//         </Link>
//     );
// }

function Login() {
    const theme = useTheme();

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (provider, formData) => {
        const emailAddress = formData.get('email');
        const password = formData.get('password');
        const data = JSON.stringify({ emailAddress, password });

        try {
            const response = await axios.post('http://localhost:8080/api/login', data,
        {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    withCredentials: true
                });

            console.log("response ::: " + response);

            if (response.status === 200) {
                navigate('/home'); // 로그인 성공 시 home으로 리다이렉트
            }

        } catch (error) {
            setError('Invalid email or password');
        }
    }

    return (
        <AppProvider theme={theme}>
            <SignInPage
                signIn={(provider, formData) => {handleLoginSubmit(provider, formData)}}
                slots={{
                    emailField: CustomEmailField,
                    passwordField: CustomPasswordField,
                    submitButton: CustomButton,
                    signUpLink: SignUpLink,
                    // forgotPasswordLink: ForgotPasswordLink,
                }}
                providers={providers}
            />
        </AppProvider>
    );
}

export default Login;
