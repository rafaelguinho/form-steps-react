import { useContext } from 'react';
import TextField from '../../components/TextField';
import RegisterValidations from '../../contexts/RegisterValidations'
import useErrors from '../../hooks/useErrors'
import useForm from '../../hooks/useForm'

function Step1({ onSend }) {
    const validations = useContext(RegisterValidations);
    const [errors, validateFields, canSubmit] = useErrors(validations);

    const { formData, handleInputChange, handleSubmit } = useForm(
        {
            customerName: "",
            customerZipCode: "",
            customerPhoneNumber: "",
            customerEmail: ""
        },
        canSubmit,
        (formData) => onSend(formData)
    );

    const {customerName, customerZipCode, customerPhoneNumber, customerEmail} = formData;

    return(
        <form onSubmit={handleSubmit}>

            <TextField type="text" onBlur={validateFields} onChange={handleInputChange} name="customerName" id="customerName" value={customerName} label="Nome completo" isValid={errors.customerName.valid} errorText={errors.customerName.text}/>
            
            <label htmlFor="customerZipCode">CEP da sua residência</label>
            <input required type="tel" onChange={handleInputChange} name="customerZipCode" value={customerZipCode} />

            <label htmlFor="customerPhoneNumber">Seu telefone</label>
            <input required type="tel" onChange={handleInputChange} name="customerPhoneNumber" value={customerPhoneNumber} />

            <label htmlFor="customerEmail">E-mail</label>
            <input required type="email" onChange={handleInputChange} name="customerEmail" value={customerEmail} />
        
            <button type="submit">Pŕoximo</button>
        </form>
    );
}

export default Step1;