import { FormikProvider, useFormik } from "formik";
import { AnySchema } from "yup";
import TextField from "./fields/TextField";
import { referAFriendSchema } from "./schemas/ReferAFriendSchema";

const ReferAFriendForm = () => {
    const fields = Object.entries(referAFriendSchema.fields) as [string, AnySchema][];

    const formik = useFormik({
        initialValues: {},
        validationSchema: referAFriendSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <FormikProvider value={formik}>
            <div className="columns is-multiline">
                {fields.map(([name, field]) => (
                    <div
                        key={name}
                        className={`column ${name.includes('Name') ? 'is-half' : 'is-full'}`}
                    >
                        <TextField name={name} label={field.spec.label} />
                    </div>
                ))}
            </div>
            <button className="button is-primary" onClick={formik.submitForm}>
                Submit
            </button>
        </FormikProvider>
    );
};

export default ReferAFriendForm;
