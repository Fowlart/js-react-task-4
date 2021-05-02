import React from 'react';
import {useFormik} from 'formik';

const Basic = () => {

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        } else if (values.firstName.length < 3) {
            errors.firstName = 'Must be more then 3 characters';
        }

        if (!values.lastName) {
            errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
            errors.lastName = 'Must be 20 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;
    };


    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell at us.
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    //example: We pass an id and name HTML attribute that matches the property we defined in initialValues
    //example: We access the field’s value using the same name (lastName -> formik.values.lastName)
    //example: We access the field’s value using the same name (email -> formik.values.email)

    /** If we’re okay with using the browser’s built-in HTML input validation, we could add a required prop to each of our inputs,
     specify minimum/maximum lengths (maxlength and minlength), and/or add a pattern prop for regex validation for each
     of these inputs. These are great if we can get away with them. **/

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" onChange={formik.handleChange}
                   value={formik.values.firstName}  onBlur={formik.handleBlur}/>
            {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
            <br/>

            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" onChange={formik.handleChange}
                   value={formik.values.lastName}  onBlur={formik.handleBlur}/>
            {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
            <br/>

            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" onChange={formik.handleChange}
                   value={formik.values.email}  onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <br/>

            <button type="submit">Submit</button>
        </form>);
}

export default Basic;
