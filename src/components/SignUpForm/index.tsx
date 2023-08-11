import DumbSignUp from './DumbSignUp'
import { api } from '../../config'
import { useStyles } from "./signup.style"

const SignUpForm = () => {

    const endpoint = 'signup'
    const styles = useStyles();
    const handleSubmit = async (values: FormData) => {
        try {
            // @ts-ignore
            const response = await api.makeSignupReq(endpoint, values.name, values.email, values.secret);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return <DumbSignUp handleSubmit={handleSubmit} styles={styles}/>
}

export default SignUpForm