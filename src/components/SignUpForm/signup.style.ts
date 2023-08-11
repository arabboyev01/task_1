import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    mainBody: {
        width: '100%',
        height: '100vh',
        background: '#333',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
    },
    container: {
        background: '#ccc',
        padding: '100px 50px',
    },
    pop:{
        margin: "10px 0",
    },
    paper: {
        padding: '10px',
        width: 300,
    },
    button: {
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

}));