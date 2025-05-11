import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "tailwindcss";
import { loginThunk } from "../redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };
    
    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(loginThunk(values));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            <Form>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <Field name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <Field name='password' type="password" className="input" placeholder="Password" />
                                    <Link to='/register' className="link link-hover">You haven`t account yet? Make registration!</Link>
                                    <button className="btn btn-neutral mt-4" type='submit'>Login</button>
                                </fieldset>
                            </Form>
                        </Formik>
                        <div className='divider divider-ghost'></div>
                        <Link className='text-lg text-center' to='/'>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;