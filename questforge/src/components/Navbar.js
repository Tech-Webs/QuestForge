import styles from './Navbar.module.css'

function Navbar(){
    return(
        <header>
            <nav>
                <a className = {styles.Logo} href ="/">QuestForge</a>
                <ul className = {styles.navList}>
                    <li><a href = "/">Sobre</a></li>
                    <li><a  href = "/">Perfil</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar