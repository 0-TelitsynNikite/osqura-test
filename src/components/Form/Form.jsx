import TestForm from "./TestForm/TestForm";
import EntryForm from "./EntryForm/EntryForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Service from "../../services/service";
import { useEffect, useState } from "react";

const Form =  () => {
    const [valueInput, setValueInput] = useState({
        CheckEmail: null,
        email: null
    });    

    const getEmail = async (url) => {
        const service = await new Service().getEmail(url);
        const user =  await service.exists;
        setValueInput({
            CheckEmail: user,
            email: url
        })
    }


    if (valueInput.CheckEmail == 1) {
        return <EntryForm title="Вход" />
    }

    if (valueInput.CheckEmail == 0) {
        return <RegistrationForm title="Регистрация" />
    }

    
    return (
        <TestForm title='Вход или регистрация' getEmail={getEmail}/>
    )
}

export default Form;