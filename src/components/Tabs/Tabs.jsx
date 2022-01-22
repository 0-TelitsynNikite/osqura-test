import { NavLink } from 'react-router-dom';
import './Tabs.scss'

const Tabs = () => {
    return (
        <nav className='tabs'>
            <NavLink to='/form-1' ><li className="tabs_link">Вход 1</li></NavLink>
            <NavLink to='/form-2' ><li className="tabs_link">Вход 2</li></NavLink>
            <NavLink to='/form-3' ><li className="tabs_link">Вход 3</li></NavLink>
        </nav>
    )
}

export default Tabs;