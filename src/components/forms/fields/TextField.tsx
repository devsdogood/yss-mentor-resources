import { useField, FieldHookConfig } from 'formik';

type TextFieldProps = {
  label?: string;
  placeholder?: string;
} & FieldHookConfig<string>;

const TextField: React.FC<TextFieldProps> = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type="text" placeholder={placeholder} {...field} />
      </div>
      {meta.error && meta.touched && <p className="help is-danger">{meta.error}</p>}
    </div>
  );
};

export default TextField;
