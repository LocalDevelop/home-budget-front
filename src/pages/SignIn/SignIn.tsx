import TextField from '@mui/joy/TextField';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';
import React from 'react';

export const SignIn = () => {

    return (
        <Card variant="outlined" sx={{
            width: '300px',
            border: 'none',
            display: 'grid',
            boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
            gap: 1,
            alignItems: 'center',
            justifyItems: 'center',
            left: '35%',
            top: '200px',
            flex: 'wrap'
        }}>

            <TextField
                placeholder="Login"
                variant="outlined"
                color="primary"
                fullWidth
            />
            <TextField
                placeholder="Password"
                type="password"
                variant="outlined"
                color="primary"
                fullWidth
            />
            <Typography display="block" gutterBottom textColor="gray" textAlign="center">
                или
            </Typography>

            <TelegramIcon cursor="pointer" color="primary"></TelegramIcon>

            <Button
                color="primary"
                fullWidth
                variant="outlined">Войти
            </Button>
        </Card>
    )
}