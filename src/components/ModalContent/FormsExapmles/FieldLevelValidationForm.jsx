import React from 'react';
import { Formik, Form, Field } from 'formik';

/** Formik supports field-level validation via the validate prop of <Field>/<FastField> components or useField hook.
 * This function can be synchronous or asynchronous (return a Promise). It will run after any onChange and onBlur by default.*/

 function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateUsername(value) {
    let error;
    if (value === 'admin') {
        error = 'Nice try!';
    }
    return error;
}

export const FieldLevelValidationExample = () => (
    <div>
        <h1>FieldLevelValidationExample</h1>
        <Formik
            initialValues={{username: '', email: '',}}

            onSubmit={values => {
                // same shape as initial values
                console.log(values);
            }}
        >
            {({ errors, touched, isValidating }) => (
                <Form>
                    <Field name="title" validate={validateEmail} />
                    {errors.email && touched.email && <div>{errors.email}</div>}

                    <Field name="username" validate={validateUsername} />
                    {errors.username && touched.username && <div>{errors.username}</div>}

                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);
