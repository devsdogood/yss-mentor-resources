import { FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { AnySchema } from "yup";
import TextField from "./fields/TextField";
import { referAFriendSchema } from "./schemas/ReferAFriendSchema";

const ReferAFriendForm = () => {
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const fields = Object.entries(referAFriendSchema.fields) as [string, AnySchema][];

    const formik = useFormik({
        initialValues: Object.fromEntries(fields.map(([key]) => [key, ''])),
        validationSchema: referAFriendSchema,
        onSubmit: async (values, { resetForm }) => {
            await fetch(
                `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORM_EMAIL}`,
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                }
            );

            resetForm();
            setHasSubmitted(true);
        },
    });

    const FormSuccessMessage = (
        <article className="message is-primary">
            <div className="message-body">
                Form successfully submitted. Thank you for referring your friend!
            </div>
        </article>
    );

    const SectionTitle: React.FC<{label?: string}> = ({ label }) => (
        <div className="column is-full my-2">
            <h3 className="title is-3">{label?.replace('first name', 'information')}</h3>
        </div>
    );

    return (
        <FormikProvider value={formik}>
            {hasSubmitted && FormSuccessMessage}

            <div className="columns is-multiline mt-6">
                {fields.map(([name, field]) => (
                    <>
                        {name.includes('FirstName') && <SectionTitle label={field.spec.label} />}
                        <div
                            key={name}
                            className={`column ${name.includes('Name') ? 'is-half' : 'is-full'}`}
                        >
                            <TextField name={name} label={field.spec.label} />
                        </div>
                    </>
                ))}
            </div>

            <button
                className={`button is-primary ${formik.isSubmitting && 'is-loading'}`}
                onClick={formik.submitForm}
            >
                Submit
            </button>
        </FormikProvider>
    );
};

export default ReferAFriendForm;
