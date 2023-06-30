import * as yup from "yup";
export const VALIDATION = {
  REQUIRED: yup.string().required(),
  MIN_6: yup.string().required().min(6),
  EMAIL: yup.string().required().email(),
  NUMBER: yup.number().required().positive().integer(),
};
