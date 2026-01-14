import './Footer.css'

const Footer  = () => {
    return (
            <div id="Final" class="Footer">
                <div class="Footer-div">
                    <div class="Nav">
                    <h4>Navegação:</h4>
                    <a href="#Apresentação"><i class="fa-solid fa-person-chalkboard"></i> Apresentação</a>
                    <a href="#Destaque"><i class="fas fa-user"></i>  Destaque</a>
                    <a href="#Projetos"><i class="fas fa-project-diagram"></i> Projetos</a>
                    <a href="#Final"><i class="fas fa-envelope"></i> Final</a>
                    </div>
                    <div class="Nav">
                    <h4>Contato:</h4>
                    <a href="malito:felipe.catarino.dev@gmail.com"><i class="fa-solid fa-at"></i> felipe.catarino.dev@gmail.com</a>
                    <a href="https://wa.me/5515997238091"><i class="fa-solid fa-phone"></i> +55 (15)997238091</a>
                    </div>
                    <div class="Nav">
                    <h4>Links:</h4>
                    <a href="https://www.linkedin.com/in/felipe-catarino-de-souza-8a0907373"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
                    <a href="https://github.com/Fellps018"><i class="fa-brands fa-github"></i> GitHub</a>
                    </div>
                </div>
                <p class="p">&copy; <span id="year"></span> Felipe Catarino de Souza. Todos os direitos reservados.</p>
            </div>
    )
}
//const yaer = document.getElementById("year")
//yaer.textContent = new Date().getFullYear();



export default Footer