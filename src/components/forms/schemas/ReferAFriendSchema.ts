import * as yup from "yup";

export const referAFriendSchema = yup.object().shape({
    yourFirstName: yup.string().required().label('Your first name'),
    yourLastName: yup.string().required().label('Your last name'),
    yourEmail: yup.string().email().required().label('Your email'),
    friendFirstName: yup.string().required().label('Your friend\'s first name'),
    friendLastName: yup.string().required().label('Your friend\'s last name'),
    friendEmail: yup.string().email().required().label('Your friend\'s email'),
    city: yup.string().required().label('Your friend\'s city'),
});
