import './Hero.css'

const Hero = () => {
    return ( 
    <main>
    <section id="hero" class="hero">
        <div>
    <img class="Hero-Image" src="https://wallpaper.forfun.com/fetch/dc/dcaa288fbf74a740a895e94219646ac5.jpeg"/>
        </div>
    <div class="hero-content">
        <h2><i class="fa-solid fa-gear"></i>   Desenvolvedor FullStack  <i class="fa-solid fa-server"></i></h2>
        <p class="hero-subtitle">Transformando ideias em sistemas robustos e escaláveis</p>
        <div class="hero-buttons">
        <a href="#projects" class="btn-primary">Ver projetos</a>
        <a href="#footer" class="btn-secondary">Contato</a>
        </div>
    </div>
    </section>
    </main>
    )}

    export default Hero