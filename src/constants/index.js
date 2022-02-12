
export const MODAL_TYPE = {
    EDIT: "EDIT",
    ADD: "ADD",
    DELETE: "DELETE"
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
