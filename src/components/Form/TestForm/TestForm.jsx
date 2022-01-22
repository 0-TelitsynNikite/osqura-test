import '../Form.scss'
import './TestForm.scss'
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';


const TestForm = ({title}) => {
    return (
        <form className="form">
            <div className='form-header'><p>{title}</p> <i class="bi bi-x-lg"></i></div>
            <div className='form-container'>
                <Input type={'email'} placeholder={'Email'} />
            </div>
            <div className='button-container'>
                <Button className="button">Продолжить</Button>
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
