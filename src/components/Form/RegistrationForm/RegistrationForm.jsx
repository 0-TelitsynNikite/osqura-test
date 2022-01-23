import '../Form.scss'
import './RegistrationForm.scss'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import EntryForm from '../EntryForm/EntryForm';
import Service from '../../../services/service';
import { useState } from 'react';

const RegistrationForm = ({title}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [successValue, setSuccessValue] = useState({
        successId: null,
        successEmail: null
    });

    const getRegister = async (name, phone, email, password) => {
        const service = await new Service().getRegister(name, phone, email, password);
        const successItem = await service.success;
        const successEmail = email;
        setSuccessValue({
            successId: successItem,
            successEmail: successEmail
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getRegister(name, phone, email, password)
    };

    if (successValue.successId) {
        return <EntryForm title='Вход' email={successValue.successEmail}/>
    }


    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form-header'><p>{title}</p> <i className="bi bi-x-lg"></i></div>
            <div className='form-container'>
                <Input 
                    onChange={event => setEmail(event.target.value) } 
                    type={'email'}
                    placeholder={'Email'} />

                <Input 
                    onChange={event => setPassword(event.target.value)}
                    type={'password'} 
                    placeholder={'Пароль'} />
                <Input 
                    onChange={event => setName(event.target.value)}
                    type={'text'} 
                    placeholder={'Имя и фамилия'} />
                <Input 
                    onChange={event => setPhone(event.target.value)}
                    type={'phone'} 
                    placeholder={'Телефон'} />
            </div>
            <div className='button-container'>
                <Button className="button">Создать аккаунт</Button>
            </div>
            <div className='agreement-container'>
                <p className='agreement-text'>Нажимая на &laquo;Создать аккаунт&raquo;, вы соглашаетесь с <a href='#' className='agreement-text__span'>Политикой обработки данных</a></p>
            </div>
        </form>
    )
}

export default RegistrationForm;