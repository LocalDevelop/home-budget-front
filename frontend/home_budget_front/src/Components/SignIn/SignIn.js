import TextField from '@mui/joy/TextField';
import Card from '@mui/joy/Card';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TelegramIcon from '@mui/icons-material/Telegram';




export const SignIn = () => {

    return (
        <Card variant="outlined" sx={{
            width: '300px',
            borderColor: 'gray',
            display: 'grid',
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
            <Typography variant="caption" display="block" gutterBottom textColor="gray" textAlign="center">
                или
            </Typography>

            <TelegramIcon onclick color="primary"></TelegramIcon>

            <Button
                color="primary"
                fullWidth
                variant="outlined">Войти
            </Button>
        </Card>
    )
}
export default SignIn;