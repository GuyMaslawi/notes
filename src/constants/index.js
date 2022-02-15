
export const MODAL_TYPE = {
    ADD: "ADD",
    DELETE: "DELETE"
};

export const ALERT_REGISTER_TYPES = {
    success: {
        type: "success",
        msg: "Register Successfully!"
    },
    danger: {
        type: "danger",
        msg: "Register Failed!"
    }
};

export const ALERT_LOGIN_TYPES = {
    success: {
        type: "success",
        msg: "Login Successfully!"
    },
    danger: {
        type: "danger",
        msg: "Login Failed!"
    }
};

export const INPUTS = [
    {
        id: 2,
        type: "text",
        register: "email",
        placeholder: "Email",
    },
    {
        id: 3,
        type: "password",
        register: "password",
        placeholder: "Password",
    },
];

export const REGISTER_INPUTS = [
    {
        id: 1,
        type: "text",
        register: "name",
        placeholder: "Name",
    },
    ...INPUTS,
    {
        id: 4,
        type: "password",
        register: "passwordRepeat",
        placeholder: "Password Repeat",
    },
];

export const ADD_NOTE_INPUTS = [
    {
        id: 1,
        type: "text",
        register: "title",
        placeholder: "Title",
    },
    {
        id: 2,
        type: "text",
        register: "description",
        placeholder: "Description",

    }
];
