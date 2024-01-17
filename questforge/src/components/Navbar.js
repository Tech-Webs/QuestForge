import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
import logo from '../assets/images/LOGO_FODASTICA_POLICIA.png'

function Navbar() {
    return (
        <header>
            <section className='navbar'>
                <nav>
                        <a href='/'><img className={styles.LogoImg} src={logo} alt='Logo_QuestForge' /></a>
                        <a className={styles.Name} href="/">QuestForge</a>
                        
                    <ul className={styles.navList}>
                        <li><a href="/">Sobre</a></li>
                        <li><a href=""><Link to="/perfil">Perfil</Link></a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}
export default Navbar