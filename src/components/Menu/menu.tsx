import './menu.scss'

import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className='menu-container'>
            <p>Saito's Project</p>
            <nav>
                <ul>
                    <li><Link className="link" to='/'>Pedidos</Link></li>
                    <li><Link className="link" to='/users'>Usuários</Link></li>
                </ul>
            </nav>
        </div>
    )
}



export default Menu;