import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/LOGO_FODASTICA_POLICIA.png'

function Navbar() {
    return (
        <header>
            <nav>
                <div className='LogoCompleta'>
                    <a href='/'><img className={styles.LogoImg} src={logo} alt='Logo_QuestForge' /></a>
                    <a className={styles.Logo} href="/">QuestForge</a>
                </div>

                <ul className={styles.navList}>
                    <li><a href="/">Sobre</a></li>
                    <li><a href=""><Link to="/perfil">Perfil</Link></a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar