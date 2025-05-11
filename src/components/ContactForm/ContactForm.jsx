import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { addContact } from '../../redux/contacts/operations';
import { useDispatch } from "react-redux";

const ContactForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        number: '',
    };

    const onSubmit = (values, actions) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };

        dispatch(addContact(newContact));
        actions.resetForm();    
    };

    const applySchema = Yup.object().shape({
        name: Yup.string().trim().min(3, 'Name must be at least 3 characters')
      .max(50, 'Name must be less than or equal to 50 characters').required(),
        number: Yup.string().trim().min(3, 'Number must be at least 3 characters')
      .max(50, 'Number must be less than or equal to 50 characters').required(),
    });

    return (
        <div className={s.formWrapper}>
            <Formik onSubmit={onSubmit} initialValues={initialValues} validationSchema={applySchema}>
                <Form className={s.form}>
                    <label className={s.label}>
                        <span className={s.span}>Name</span>
                        <Field className={s.input} name="name" type="text"/>
                        <ErrorMessage name="name" component="div" className={s.error} />
                    </label>
                    <label className={s.label}>
                        <span className={s.span}>Number</span>
                        <Field className={s.input} name="number" type="text" />
                        <ErrorMessage name="number" component="div" className={s.error} />
                    </label>
                    <button type="submit" className={s.addButton}>Add contact</button>
                </Form>
            </Formik>
        </div>
    )
        

};

export default ContactForm;