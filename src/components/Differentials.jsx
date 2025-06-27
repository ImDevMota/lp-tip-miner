import { LaptopMinimalCheck } from "lucide-react";
import CompassImg from "../assets/compass.svg";
import DatabaseImg from "../assets/database.svg";
import RunImg from "../assets/run.svg";
import Elipse2Img from "../assets/elipse-2.png";
import Elipse2DesktopImg from "../assets/elipse-2-desktop.png";

function Differentials() {
  return (
    <section className="mt-[2rem] flex justify-center items-center relative">
      <div className="flex flex-col w-[85%] mb-[3rem] sm:items-center">
        <h2 className="text-white text-[24px] sm:text-[56px] font-[700] text-center">
          Quais São Os Diferenciais do TipMiner:
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center mt-[2rem] sm:mt-[3.6rem] gap-y-[1rem] sm:gap-x-[1rem]">
          <div className="flex flex-col gap-y-[1rem] sm:gap-y-[1.5rem]">
            <div className="p-[1px] bg-[#FFFFFF4D] rounded-3xl w-[100%] sm:w-[33rem]  overflow-hidden">
              <div className="bg-[#100a2e]/90 h-[13.5rem] sm:h-[19.6rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-3xl text-[white] flex flex-col">
                <div className="flex flex-col absolute top-[-0.1rem] left-[1rem] sm:left-[1.55rem] h-[0.8rem] items-center">
                  <div class="w-[2.5rem] sm:w-[3rem] h-0.5 bg-[#02C1E3]"></div>
                  <div class="absolute top-[-1.2rem] left-0 w-[2.35rem] sm:w-[2.75rem] sm:h-[2.75rem] h-[2.35rem] bg-[#02C1E3] rounded-full blur-[0.6rem] opacity-25"></div>
                </div>

                <div className="flex flex-col w-[82%] h-[12.3rem] justify-center">
                  <div className="flex rounded-full w-fit border-[0.12rem] sm:border-[0.2rem] sm:p-[0.24rem] border-[#FFFFFF4D]">
                    <img
                      src={CompassImg}
                      alt=""
                      className="w-[38px] h-[38px] sm:w-[48px] sm:h-[48px]"
                    />
                  </div>
                  <p className="text-white text-[12.9px] sm:text-[20px] font-[300] mt-[1.2rem]">
                    <span className="font-bold">Precisão Analítica: </span>
                    Imagine ter uma bússola dos jogos ao seu lado, guiando cada
                    aposta com insights gerados por dados avançados, sobre
                    quando, onde e como apostar para ganhar.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-[#FFFFFF4D] rounded-3xl w-[100%] sm:w-[33rem]  overflow-hidden">
              <div className="bg-[#100a2e]/90 h-[13.5rem] sm:h-[19.6rem] backdrop-blur-md py-[1rem] relative items-center justify-center rounded-3xl text-[white] flex flex-col">
                <div className="flex flex-col absolute top-[-0.1rem] left-[1rem] sm:left-[1.55rem] h-[0.8rem] items-center">
                  <div class="w-[2.5rem] sm:w-[3rem] h-0.5 bg-[#02C1E3]"></div>
                  <div class="absolute top-[-1.2rem] left-0 w-[2.35rem] sm:w-[2.75rem] sm:h-[2.75rem] h-[2.35rem] bg-[#02C1E3] rounded-full blur-[0.6rem] opacity-25"></div>
                </div>

                <div className="flex flex-col h-[12.3rem] w-[82%] justify-center relative">
                  <div className="flex rounded-full w-fit p-[0.62rem] sm:p-[0.93rem] border-[0.12rem] sm:border-[0.2rem] border-[#FFFFFF4D]">
                    <img
                      src={DatabaseImg}
                      alt=""
                      className="w-[18.5px] h-[18.5px] sm:w-[25.8px] sm:h-[25.8px]"
                    />
                  </div>
                  <p className="text-white text-[12.9px] sm:text-[20px] font-[300] mt-[1.2rem]">
                    <span className="font-bold">
                      Análise Avançada de Jogos:{" "}
                    </span>
                    O TipMiner desvenda os segredos dos maiores dos jogos
                    online, oferecendo análises tão profundas que você sentirá
                    como se pudesse prever o futuro. Cada movimento é uma jogada
                    calculada rumo à riqueza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-[1rem] sm:gap-y-[1.5rem]">
            <div className="p-[1px] bg-[#FFFFFF4D] rounded-3xl w-[100%] sm:w-[33rem]  overflow-hidden">
              <div className="bg-[#100a2e]/90 h-[13.5rem] sm:h-[19.6rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-3xl text-[white] flex flex-col">
                <div className="flex flex-col absolute top-[-0.1rem] left-[1rem] sm:left-[1.55rem] h-[0.8rem] items-center">
                  <div class="w-[2.5rem] sm:w-[3rem] h-0.5 bg-[#02C1E3]"></div>
                  <div class="absolute top-[-1.2rem] left-0 w-[2.35rem] sm:w-[2.75rem] sm:h-[2.75rem] h-[2.35rem] bg-[#02C1E3] rounded-full blur-[0.6rem] opacity-25"></div>
                </div>

                <div className="flex flex-col w-[82%] h-[12.3rem] justify-center">
                  <div className="flex rounded-full w-fit p-[0.5rem] sm:p-[0.644rem] border-[0.12rem] sm:border-[0.2rem] border-[#FFFFFF4D]">
                    <LaptopMinimalCheck
                      size={23}
                      className="text-[#02C1E3] sm:hidden block"
                    />

                    <LaptopMinimalCheck
                      size={35}
                      className="text-[#02C1E3] hidden sm:block"
                    />
                  </div>
                  <p className="text-white text-[12.9px] sm:text-[20px] font-[300] mt-[1.2rem]">
                    <span className="font-bold">Excelência do Software: </span>O
                    TipMiner não é apenas um software qualquer; é uma ferramenta
                    desenvolvida com o máximo de excelência e eficácia,
                    desenhada para acertar os resultados com base em dados e
                    análise de padrões.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-[#FFFFFF4D] rounded-3xl w-[100%] sm:w-[33rem]  overflow-hidden">
              <div className="bg-[#100a2e]/90 h-[13.5rem] sm:h-[19.6rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-3xl text-[white] flex flex-col">
                <div className="flex flex-col absolute top-[-0.1rem] left-[1rem] sm:left-[1.55rem] h-[0.8rem] items-center">
                  <div class="w-[2.5rem] sm:w-[3rem] h-0.5 bg-[#02C1E3]"></div>
                  <div class="absolute top-[-1.2rem] left-0 w-[2.35rem] sm:w-[2.75rem] sm:h-[2.75rem] h-[2.35rem] bg-[#02C1E3] rounded-full blur-[0.6rem] opacity-25"></div>
                </div>

                <div className="flex flex-col w-[82%] h-[12.3rem] justify-center">
                  <div className="flex rounded-full w-fit p-[0.5rem] sm:p-[0.71rem] border-[0.12rem] sm:border-[0.2rem] border-[#FFFFFF4D]">
                    <img
                      src={RunImg}
                      alt=""
                      className="w-[24px] h-[24px] sm:w-[33px] sm:h-[33px]"
                    />
                  </div>
                  <p className="text-white text-[12.9px] sm:text-[20px] font-[300] mt-[1.2rem]">
                    <span className="font-bold">Automatização e Rapidez: </span>
                    No mundo dos jogos online, a velocidade é tão crucial quanto
                    a estratégia. Com o TipMiner, você está sempre um passo à
                    frente, graças à nossa plataforma ágil que automatiza a
                    análise e a tomada de decisões.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[2.5rem] sm:mt-[6rem] sm:mb-[2.5rem] text-[14px] sm:w-[32.35rem] sm:justify-center sm:flex sm:whitespace-nowrap sm:py-[1.1rem] sm:text-[20px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>

        <img
          src={Elipse2Img}
          alt=""
          className="absolute left-0 bottom-2 w-[100%] sm:hidden block"
        />

        <img
          src={Elipse2DesktopImg}
          alt=""
          className="absolute left-0 bottom-2 w-[100%] sm:block hidden"
        />
      </div>
    </section>
  );
}

export default Differentials;
