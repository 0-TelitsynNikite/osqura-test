import '../Form.scss'
import './EntryForm.scss'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const EntryForm = ({title}) => {
    return (
        <form className="form">
            <div className='form-header'><p>{title}</p> <i class="bi bi-x-lg"></i></div>
            <div className='form-container'>
                <Input type={'email'} placeholder={'Email'} />
                <Input type={'password'} placeholder={'Password'} />
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