import "./forminput.styles.jsx";
import { Group, FormInputLabel, Input } from "./forminput.styles.jsx";
const FormInput = ({ label, ...InputProps }) => {
    return (
        <Group>
            <Input placeholder=" " {...InputProps} />
            {label && <FormInputLabel>{label}</FormInputLabel>}
        </Group>
    );
};

export default FormInput;
