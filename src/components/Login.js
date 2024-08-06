import React from 'react';
import { TextField, Button, Box, Typography, Container, ThemeProvider, createTheme, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00FFFF', 
        },
    },
});

const Login = () => (
    <ThemeProvider theme={theme}>
        <Box className="bg-hero-pattern min-h-screen flex items-center justify-center">
            <Container maxWidth="xs" sx={{ my: 18 }}>
                <Box
                    sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                        borderRadius: '8px',
                        border: '2px solid #00FFFF', 
                        padding: '1.5rem', 
                    }}
                >
                    <Typography variant="h5" component="h2" color="primary" align="center" gutterBottom>
                        Login
                    </Typography>
                    <form>
                        <Box mb={1}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                                type="text"
                                margin="normal"
                                InputLabelProps={{ style: { color: '#00FFFF' } }}
                                InputProps={{ style: { color: '#00FFFF' } }}
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                                fullWidth
                                label="Password"
                                variant="outlined"
                                type="password"
                                margin="normal"
                                InputLabelProps={{ style: { color: '#00FFFF' } }}
                                InputProps={{ style: { color: '#00FFFF' } }}
                            />
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ padding: '0.75rem', fontWeight: 'bold' }}
                        >
                            Login
                        </Button>
                        <Box mt={2} textAlign="center">
                            <Typography variant="body2" color="primary">
                                New user?{' '}
                                <MUILink component={Link} to="/register" color="primary">
                                    Register here
                                </MUILink>
                            </Typography>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Box>
    </ThemeProvider>
);

export default Login;
