import { useState } from 'react';

const useForm = (initialState = {}, canSubmit, onSubmit) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(canSubmit()){
            onSubmit?.(formData);
        }
    }

    return { formData, handleInputChange, handleSubmit};
}

export default useForm;