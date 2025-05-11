import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "tailwindcss";
import { registerThunk } from "../redux/auth/operations";

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, options) => {
        console.log(values);
        dispatch(registerThunk(values));
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign UP now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                            <Form>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <Field name='name' type="name" className="input" placeholder="Name" />
                                    <label className="label">Email</label>
                                    <Field name='email' type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <Field name='password' type="password" className="input" placeholder="Password" />
                                    <Link to='/login' className="link link-hover">You already have account? Sign in!</Link>
                                    <button className="btn btn-neutral mt-4" type="submit">Registration</button>
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

export default RegistrationForm;