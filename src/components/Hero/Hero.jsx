import Header from "../Header/Header"

import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
            <Header />

            <div className="best-ad">
                <div></div>
                <span>A melhor Nutrição Esportiva e só Sua!</span>
            </div>

            <div className="hero-text">
                <div>
                  <span className="stroke-text">Faça </span>
                  <span>Dieta </span>
                  <span className="stroke-text">com</span>
                </div>
                <div><span>
                  Corpo e Mente</span>
                </div>
                <div>
                  <span>
                    Aqui nós iremos ajudar você a realizar a melhor dieta com os melhores exercícios, acompanhamento psicológico e tecnológico para o resultado Ideal!
                  </span>
                </div>                  
            </div>

            <div className="figures">
              <div>
                <span>+10</span>
                <span>Especialistas</span>
              </div>
              <div>
                <span>+130</span>
                <span>Membros Ativos</span>
              </div>
              <div>
                <span>+50</span>
                <span>Programas Fitness</span>
              </div>
            </div>
        </div>
        <div className="right-h">right side</div>
    </div>
  )
}

export default Hero