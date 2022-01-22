import '../Form.scss'
import './EntryForm.scss'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Service from '../../../services/service';
import { useState } from 'react';

const EntryForm = ({title}) => {
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState(false);



    const authorize = async (authEmail, authPassword) => {
        const service = await new Service().auth(authEmail, authPassword);
        if (service.errors) {
            setError(true)
        } else if (service.token) {
            setUsers(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authorize(email, password)
    }

    if (error) {
        return <h1>Error</h1>
    } else if (users) {
        return <h1>Authorized</h1>
    }

    


    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form-header'><p>{title}</p> <i className="bi bi-x-lg"></i></div>
            <div className='form-container'>
                <Input 
                    onChange={event => setEmail(event.target.value)}
                    type={'email'} 
                    placeholder={'Email'} />
                <Input 
                    onChange={event => setPassword(event.target.value)}
                    type={'password'} 
                    placeholder={'Password'} />
            </div>
            <div className='button-container'>
                <Button className="button">Войти</Button>
            </div>
            <div className='text-container'>
                <a className='text__link'>Забыли пароль?</a>
            </div>
        </form>
    )
}


export default EntryForm;