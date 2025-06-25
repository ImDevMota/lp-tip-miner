import Logo from "../assets/logo-tip-miner.svg";
import LogoDk from "../assets/logo-tip-miner-desktop.svg";
import OutdoorBg from "../assets/outdoor-tip-miner.png";
import OutdoorBgDk from "../assets/outdoor-tip-miner-desktop.png";
import LogosBets from "../assets/logos-bets.png";
import LogosBetsDk from "../assets/logos-bets-desktop.png";

function Outdoor() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-center items-center">
        <div
          className="block sm:hidden absolute top-0 left-0 w-full h-[35rem] mt-[5rem] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${OutdoorBg})` }}
        />

        <div
          className="sm:block absolute top-0 left-0 w-full h-[75rem] bg-cover bg-center z-0 hidden"
          style={{ backgroundImage: `url(${OutdoorBgDk})` }}
        />

        <div className="relative z-10 flex sm:w-[70%] flex-col items-center mt-[3rem] sm:mt-[5rem]">
          {/* Imagem não precisa ser absolute — apenas ajustada no layout */}

          <img src={Logo} alt="Logo" className="sm:hidden" />
          <img
            src={LogoDk}
            alt="Logo"
            className="sm:block hidden sm:self-start"
          />

          <div className="flex flex-col sm:w-[40%] w-[85%] mt-[25.8rem] sm:self-start sm:mt-[9rem] sm:whitespace-nowrap">
            <h2 className="text-white text-center sm:text-start leading-tight text-[24px] sm:text-[44px] font-[600]">
              Você vai se tornar o pior <br className="hidden sm:block" />{" "}
              pesadelo dos cassinos online, <br />
              <span className="text-[23px] sm:text-[44px] font-[600] text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#03BDE3] to-[#0515E7]">
                enchendo o bolso de dinheiro
              </span>
            </h2>

            <div className="flex flex-row justify-center sm:justify-start mt-[2rem]">
              <p
                className="text-transparent bg-clip-text font-[600] text-[22px] sm:ml-[1rem] sm:text-[32px] mr-[1.5rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #1CC47E 0%, #6BFF53 50%, #1CC47E 100%)",
                }}
              >
                *
              </p>
              <p
                className="bg-clip-text text-transparent tracking-wide font-[600] text-[14px] sm:text-[24px] mt-[0.18rem] text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #1CC47E 0%, #6BFF53 50%, #1CC47E 100%)",
                }}
              >
                Chega de depender apenas da sorte!
              </p>
              <p
                className="text-transparent bg-clip-text font-[600] text-[22px] sm:text-[32px] ml-[1.5rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #1CC47E 0%, #6BFF53 50%, #1CC47E 100%)",
                }}
              >
                *
              </p>
            </div>

            <p className="text-[16px] font-[400] text-[white] sm:text-[20px] sm:whitespace-nowrap sm:text-start text-center mt-[1.5rem]">
              Tenha em mãos o sistema exclusivo do TipMiner para{" "}
              <br className="hidden sm:block" /> dominar os resultados dos jogos
              online. Garanta seus <br className="hidden sm:block" />
              ganhos de forma automatizada com o nosso software{" "}
              <br className="hidden sm:block" />
              de análise e estratégia imbatível.
            </p>
          </div>

          {/* Botão */}
          <a className="text-[white] mt-[2.5rem] text-[14px] sm:self-start sm:w-[32.35rem] sm:justify-center sm:flex sm:whitespace-nowrap sm:py-[1.1rem] sm:text-[20px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
            Quero aumentar meus lucros com o TipMiner
          </a>

          {/* Imagem de marcas/parceiros */}
          <img
            src={LogosBets}
            alt="Parceiros"
            className="mt-[4rem] w-full block sm:hidden"
          />

          <div className="relative w-full h-[10rem] hidden sm:block justify-center items-center top-[10rem]">
            {/* Imagem central */}
            <img
              src={LogosBetsDk}
              alt="Parceiros"
              className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block sm:w-[99.9%]"
            />

            {/* Gradiente à esquerda */}
            <div className="pointer-events-none absolute top-0 left-0 h-full w-[10.5rem] bg-gradient-to-r from-[#080126] to-transparent" />

            {/* Gradiente à direita */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-[10.5rem] bg-gradient-to-l from-[#080126] to-transparent" />
          </div>

          {/* Bloco informativo */}
          <div className="p-[1.5px] bg-gradient-to-b sm:bg-gradient-to-r from-[#5F858E] to-[#100a2e] rounded-2xl w-[85%] sm:w-full sm:mt-[15rem] mt-[4rem]">
            <div className="bg-[#100a2e] backdrop-blur-md py-[3.5rem] sm:pb-[6rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <div className="flex flex-col w-[80%] sm:flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap sm:justify-center">
                  <h2 className="font-[600] text-[32px] sm:text-[48px]  sm:text-start sm:mr-[8rem]">
                    Por que entrar <br className="hidden sm:block" /> no
                    tipminer?
                  </h2>
                  <p className="font-[400] text-[16px]  sm:text-[24px] sm:text-start tracking-wide mt-[2.5rem]">
                    O propósito do TipMiner é{" "}
                    <span className="font-bold mr-[4px]">
                      democratizar o sucesso <br className="hidden sm:block" />{" "}
                      nos jogos online
                    </span>
                    , empoderando jogadores com dados{" "}
                    <br className="hidden sm:block" /> e análises precisas para
                    que tomem decisões <br className="hidden sm:block" />{" "}
                    estratégicas e ganhem com confiança.
                  </p>
                </div>
                <p className="font-[400] text-[16px] sm:text-[24px] tracking-wide sm:mt-[2.5rem] mt-[1.5rem]">
                  Acreditamos que, através de conhecimento e tecnologia, todos
                  podem transformar sua paixão por jogos em vitórias
                  significativas e lucrativas, sem depender da sorte
                </p>
              </div>
            </div>
          </div>

          {/* Chamada final */}
          <div className="flex flex-col w-[85%] items-center">
            <p className="font-[700] text-center text-white text-[16px] sm:text-[24px] mt-[5rem]">
              Quer ganhar de verdade nos jogos online?
            </p>

            <h2 className="text-[28px] mt-[1.5rem] sm:mt-[1rem] font-[700] text-center sm:text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-[#03BDE3] to-[#0515E7]">
              TipMiner é a sua <br className="block sm:hidden" />
              ferramenta essencial.
            </h2>

            <a className="text-[white] mt-[2.5rem] text-[14px] sm:w-[32.35rem] sm:justify-center sm:flex sm:whitespace-nowrap sm:py-[1.1rem] sm:text-[20px] w-[100%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
              Quero aumentar meus lucros com o TipMiner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outdoor;
