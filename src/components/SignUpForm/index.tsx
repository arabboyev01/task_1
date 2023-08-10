import DumbSignUp from './DumbSignUp'
import { api } from '../../config'

const SignUpForm = () => {

    const endpoint = 'signup'
    const handleSubmit = async (values: FormData) => {
        try {
            // @ts-ignore
            const response = await api.makeSignupReq(endpoint, values.name, values.email, values.password);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return <DumbSignUp handleSubmit={handleSubmit}/>
}

export default SignUpForm