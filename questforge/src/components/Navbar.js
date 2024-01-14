import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <header>
            <nav>
                <a className = {styles.Logo} href ="/">QuestForge</a>
                <ul className = {styles.navList}>
                    <li><a href = "/">Sobre</a></li>
                    <li><a  href = ""><Link to ="/perfil">Perfil</Link></a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar