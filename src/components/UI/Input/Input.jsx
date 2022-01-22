import './Input.scss';

const Input = (props) => {
    return (
        <div className='input-wrapper'>
            <p className='input-title'>{props.placeholder}</p>
            <input {...props}/>
        </div>
        
    )
}

export default Input;