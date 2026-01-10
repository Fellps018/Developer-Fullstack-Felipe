import './Nav-Style.css'

const Nav = () =>{
    return(
<header class="header">
    <div class="header-container">
    <a title="Sobre mim" href="/Sobre mim"> <img class="image" alt="Sobre mim" src="src/components/Navegation/Images/Trabalho.jpeg"/> </a>
    <nav class="nav">
        <a href="#hero" class="nav-link">  Home</a>
        <a href="extension/profile.html" class="nav-link"><i class="fas fa-user"></i> Sobre</a>
        <a href="#projects" class="nav-link"><i class="fas fa-project-diagram"></i> Projetos</a>
        <a href="#footer" class="nav-link"><i class="fas fa-envelope"></i> Contato</a>
    </nav>
    <a href="https://wa.me/5515997238091" alt="Entrar em contato via Whatssapp." class="menu-toggle">Vamos Conversar</a>
    </div>
</header>
    )
}
export default Nav