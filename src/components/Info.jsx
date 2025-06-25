import DadosDesktopImg from "../assets/dados-desktop.png";
import CoinsImgDesktopImg from "../assets/coins-desktop.png";
import LogosBets from "../assets/logos-bets.png";
import ImgAvaliador1 from "../assets/avaliador-1.png";
import ImgAvaliador2 from "../assets/avaliador-2.png";
import ImgAvaliador3 from "../assets/avaliador-3.png";
import LogosBetsDk from "../assets/logos-bets-desktop.png";

function Info() {
  return (
    <section className="mt-[4rem] sm:mt-[9rem] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-white w-[85%] sm:w-[70%] text-[24px] sm:text-[56px] font-[700] text-center">
          Como o Tipminer funciona?
        </h2>

        <div className="flex flex-col sm:flex-row justify-center w-[85%] sm:w-[60%] items-center sm:mt-[11rem] gap-x-[1rem]">
          <div className="p-[0.8px] bg-gradient-to-l from-[#5E718A] to-[#161036] rounded-2xl w-[100%] sm:mt-0 mt-[7rem]">
            <div className="bg-[#161036] relative h-[12rem] backdrop-blur-md py-[1rem]  sm:h-[18.188rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <img
                src={DadosDesktopImg}
                alt=""
                className="w-[211.2px] h-[129.36px] sm:w-[320px] sm:h-[196px] absolute top-[-4.6rem] sm:top-[-6.6rem]"
              />
              <p className="text-white text-[16px] sm:text-[24px] font-[400] mt-[3rem] sm:mt-[5.5rem]">
                Nossa plataforma analisa dados de <br />
                jogos em tempo real,{" "}
                <span className="font-bold">
                  identificando <br />
                  padrões vencedores
                </span>
                e oferecendo <br />
                estratégias otimizadas.
              </p>
            </div>
          </div>

          <div className="p-[0.8px] bg-gradient-to-r from-[#5E718A] to-[#161036] rounded-2xl w-[100%] sm:mt-0 mt-[3.9rem]">
            <div className="bg-[#161036] relative h-[12rem] sm:h-[18.188rem] backdrop-blur-md py-[1rem]  rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <img
                src={CoinsImgDesktopImg}
                alt=""
                className="w-[211.2px] h-[129.36px] sm:w-[320px] sm:h-[196px] absolute top-[-4.6rem] sm:top-[-6.6rem]"
              />
              <p className="text-white text-[16px] sm:text-[24px] font-[400] mt-[3rem] sm:mt-[5.5rem] text-center">
                Nossa plataforma analisa dados de <br />
                jogos em tempo real,{" "}
                <span className="font-bold">
                  identificando <br />
                  padrões vencedores
                </span>
                e oferecendo <br />
                estratégias otimizadas.
              </p>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[2.5rem] sm:mt-[4.5rem] text-[14px] sm:w-[32.35rem] sm:justify-center sm:flex sm:whitespace-nowrap sm:py-[1.1rem] sm:text-[20px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>

        <img
          src={LogosBets}
          alt=""
          className="mt-[4rem] w-full sm:hidden block"
        />

        <div className="relative sm:block w-full h-[10rem] sm:w-[66.5%] hidden justify-center items-center mt-[8rem]">
          {/* Imagem central */}
          <img
            src={LogosBetsDk}
            alt="Parceiros"
            className="absolute left-1/2 transform -translate-x-1/2 hidden sm:block w-[99%]"
          />

          {/* Gradiente à esquerda */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-[10.5rem] bg-gradient-to-r from-[#080126] to-transparent" />

          {/* Gradiente à direita */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-[10.5rem] bg-gradient-to-l from-[#080126] to-transparent" />
        </div>

        <div className="w-[100%] flex flex-row justify-center relative">
          <div className="absolute right-0 top-0 h-full w-[4rem] sm:w-[35rem] bg-gradient-to-r from-transparent to-[#080126] z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 h-full w-[4rem] sm:w-[35rem] bg-gradient-to-l from-transparent to-[#080126] z-10 pointer-events-none" />

          <div className="flex justify-center">
            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] sm:block hidden to-[#100a2e] translate-x-[-0.8rem] sm:translate-x-[-2.4rem] rounded-2xl w-[15.5rem] sm:w-[25.813rem] sm:h-[22.75rem] mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] backdrop-blur-md py-[1rem] sm:h-full items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[79%] h-[12.3rem] sm:h-full relative">
                  <p className="text-white text-[13px] font-[600] sm:text-[20px] sm:mt-[0.7rem]">
                    "Melhor ferramenta de análise...”
                  </p>
                  <p className="text-[#ABABAB] text-[13px] font-[300] sm:font-[400] mt-[0.8rem] sm:mt-[1rem] leading-tight sm:text-[24px]">
                    "Usando o TipMiner há anos, simplesmente não há comparação
                    no mercado. A melhor ferramenta de análise de jogos que já
                    usei."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem] sm:top-[16rem]">
                    <img
                      src={ImgAvaliador3}
                      alt=""
                      className="w-[36.84px] h-[36.57px] sm:w-[53.8px] sm:h-[53.5px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600] sm:text-[16px]">
                        Marina Lopes
                      </p>
                      <p className="text-[7px] font-[300] sm:text-[12px]">
                        @Marina Lopes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] translate-x-[-0.8rem] sm:translate-x-[-1.2rem] rounded-2xl w-[15.5rem] sm:w-[25.813rem] sm:h-[22.75rem] mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] backdrop-blur-md py-[1rem] sm:h-full items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[79%] h-[12.3rem] sm:h-full relative">
                  <p className="text-white text-[13px] font-[600] sm:text-[20px] sm:mt-[0.7rem]">
                    "Melhor ferramenta de análise...”
                  </p>
                  <p className="text-[#ABABAB] text-[13px] font-[300] sm:font-[400] mt-[0.8rem] sm:mt-[1rem] leading-tight sm:text-[24px]">
                    "Usando o TipMiner há anos, simplesmente não há comparação
                    no mercado. A melhor ferramenta de análise de jogos que já
                    usei."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem] sm:top-[16rem]">
                    <img
                      src={ImgAvaliador3}
                      alt=""
                      className="w-[36.84px] h-[36.57px] sm:w-[53.8px] sm:h-[53.5px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600] sm:text-[16px]">
                        Marina Lopes
                      </p>
                      <p className="text-[7px] font-[300] sm:text-[12px]">
                        @Marina Lopes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] rounded-2xl w-[15.5rem] sm:w-[25.813rem] sm:h-[22.75rem] mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] backdrop-blur-md py-[1rem] sm:h-full items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[78.5%] h-[12.3rem] sm:h-full relative">
                  <p className="text-white text-[13px] font-[600] sm:text-[20px] sm:mt-[0.7rem]">
                    "Mudou minha abordagem...”
                  </p>
                  <p className="text-[#ABABAB] text-[13px] font-[300] sm:font-[400] mt-[0.8rem] sm:mt-[1rem] leading-tight sm:text-[20px]">
                    "O TipMiner mudou <br /> completamente minha abordagem{" "}
                    <br /> nos jogos online. Agora, faço <br /> apostas baseadas
                    em análise de <br /> dados e vejo uma grande diferença{" "}
                    <br /> nos meus resultados."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem] sm:top-[16rem]">
                    <img
                      src={ImgAvaliador1}
                      alt=""
                      className="w-[36.84px] h-[36.57px] sm:w-[53.8px] sm:h-[53.5px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600] sm:text-[16px]">
                        João Carlos
                      </p>
                      <p className="text-[7px] font-[300] sm:text-[12px]">
                        @João Carlos
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] translate-x-[0.8rem] sm:translate-x-[1.2rem] rounded-2xl w-[15.5rem] sm:w-[25.813rem] sm:h-[22.75rem]  mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] sm:h-full backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[78.5%] h-[12.3rem] sm:h-full relative">
                  <p className="text-white text-[13px] font-[600] sm:text-[20px] sm:mt-[0.7rem]">
                    "Mudou minha abordagem...”
                  </p>
                  <p className="text-[#ABABAB] text-[13px] font-[300] sm:font-[400] mt-[0.8rem] sm:mt-[1rem] leading-tight sm:text-[20px]">
                    "Incrível como o TipMiner simplifica a análise complexa de
                    dados. Minhas decisões nunca foram tão precisas."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem] sm:top-[16rem]">
                    <img
                      src={ImgAvaliador2}
                      alt=""
                      className="w-[36.84px] h-[36.57px] sm:w-[53.8px] sm:h-[53.5px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600] sm:text-[16px]">
                        Ana Beatriz
                      </p>
                      <p className="text-[7px] font-[300] sm:text-[12px]">
                        @Ana Beatriz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] sm:block hidden translate-x-[0.8rem] sm:translate-x-[2.4rem] rounded-2xl w-[15.5rem] sm:w-[25.813rem] sm:h-[22.75rem]  mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] sm:h-full backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[78.5%] h-[12.3rem] sm:h-full relative">
                  <p className="text-white text-[13px] font-[600] sm:text-[20px] sm:mt-[0.7rem]">
                    "Mudou minha abordagem...”
                  </p>
                  <p className="text-[#ABABAB] text-[13px] font-[300] sm:font-[400] mt-[0.8rem] sm:mt-[1rem] leading-tight sm:text-[20px]">
                    "Incrível como o TipMiner simplifica a análise complexa de
                    dados. Minhas decisões nunca foram tão precisas."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem] sm:top-[16rem]">
                    <img
                      src={ImgAvaliador2}
                      alt=""
                      className="w-[36.84px] h-[36.57px] sm:w-[53.8px] sm:h-[53.5px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600] sm:text-[16px]">
                        Ana Beatriz
                      </p>
                      <p className="text-[7px] font-[300] sm:text-[12px]">
                        @Ana Beatriz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[2.5rem] sm:mt-[6rem] sm:mb-[2.5rem] text-[14px] sm:w-[32.35rem] sm:justify-center sm:flex sm:whitespace-nowrap sm:py-[1.1rem] sm:text-[20px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>
      </div>
    </section>
  );
}

export default Info;
