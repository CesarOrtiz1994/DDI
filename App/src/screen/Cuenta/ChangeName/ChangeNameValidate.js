import * as Yup from 'yup';

export function initialValues(firstname, lastname) {
    return {
        firstname: firstname || '',
        lastname: lastname || '',
    };
}

export function validationSchema() {
    return Yup.object().shape({
        firstname: Yup.string().required(true),
        lastname: Yup.string().required(true),
    });
}