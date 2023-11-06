import * as Yup from 'yup';

export function initialValues(username, ) {
    return {
        username: username || '',
    };
}

export function validationSchema() {
    return Yup.object().shape({
        username: Yup.string().required(true),
    });
}