import './Header.css'
import Logo from "../../assets/logo2.png"

const Header = () => {
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo'/>

        <ul className='header-menu'>
            <li>Inicio</li>
            <li>Porque Nós?</li>
            <li>Programas</li>
            <li>Planos</li>
            <li>Depoimentos</li>
        </ul>
    </div>
  )
}

export default Header