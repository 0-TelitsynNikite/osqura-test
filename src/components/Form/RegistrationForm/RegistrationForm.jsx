import '../Form.scss'
import './RegistrationForm.scss'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';

const RegistrationForm = ({title}) => {
    return (
        <form className="form">
            <div className='form-header'><p>{title}</p> <i class="bi bi-x-lg"></i></div>
            <div className='form-container'>
                <Input type={'email'} placeholder={'Email'} />
                <Input type={'password'} placeholder={'Пароль'} />
                <Input type={'text'} placeholder={'Имя и фамилия'} />
                <Input type={'phone'} placeholder={'Телефон'} />
            </div>
            <div className='button-container'>
                <Button className="button">Создать аккаунт</Button>
            </div>
            <div className='agreement-container'>
                <p className='agreement-text'>Нажимая на &laquo;Создать аккаунт&raquo;, вы соглашаетесь с <span className='agreement-text__span'>Политикой обработки данных</span></p>
            </div>
        </form>
    )
}

export default RegistrationForm;