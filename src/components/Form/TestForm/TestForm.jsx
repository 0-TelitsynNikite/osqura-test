import '../Form.scss'
import './TestForm.scss'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import Service from '../../../services/service';
import EntryForm from '../EntryForm/EntryForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const TestForm = ({ title, getEmail }) => {
    const [email, setEmail] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        getEmail(email)
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className='form-header'><p>{title}</p> <i className="bi bi-x-lg"></i></div>
            <div className='form-container'>
                <Input
                    onChange={(event) => setEmail(event.target.value)}
                    type={'email'}
                    placeholder={'Email'} />
            </div>
            <div className='button-container'>
                <Button type="submit" className="button">Продолжить</Button>
            </div>
            <div style={{ marginTop: '-25px' }} className="button-container">
            </div>
            <div className='text-container'><p>Или</p></div>
            <div className='partner-container'>
                <a href="#" className='partner__link'><img className='partner__img' src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202112170015" alt="apple" /></a>
                <a href="#" className='partner__link'><img className='partner__img' src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202112170015" alt="apple" /></a>
                <a href="#" className='partner__link'><img className='partner__img' src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202112170015" alt="apple" /></a>
                <a href="#" className='partner__link'><img className='partner__img' src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202112170015" alt="apple" /></a>
            </div>
        </form>
    )
}

export default TestForm;
