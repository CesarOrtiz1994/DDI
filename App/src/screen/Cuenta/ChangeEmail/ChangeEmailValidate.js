import * as Yup from 'yup';

export function initialValues(email) {
    return {
        email: email || '',
    };
}

export function validationSchema() {
    return Yup.object().shape({
        email: Yup.string().email(true).required(true),
    });
}