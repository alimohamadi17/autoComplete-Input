import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
    return (
        <>
            <div className='navbar'>

                <ul className='nav-link'>

                    <li>
                        <Link to="/task1">Task1</Link>
                    </li>
                    <li>
                        <Link to="/">Task2</Link>
                    </li>
                    <li>
                        <Link to="/document">Document</Link>
                    </li>



                </ul>

            </div>
        </>
    );
}

export default Navbar;