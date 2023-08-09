import DumbSignUp from './DumbSignUp'
import  { api } from "../../config"
const SignUpForm = () => {

    const endpoint = "signup"
    const handleSubmit = async (values: FormData) => {
        // @ts-ignore
        await api.makeSignupReq(endpoint, values.name, values.email, values.password).then(console.log)
            .catch((err: any) => console.log(err))
    };

    return <DumbSignUp handleSubmit={handleSubmit}/>
}

export default SignUpForm