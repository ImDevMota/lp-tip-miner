import DadosImg from "../assets/dados.png";
import CoinsImg from "../assets/coins.png";
import LogosBets from "../assets/logos-bets.png";
import ImgAvaliador1 from "../assets/avaliador-1.png";
import ImgAvaliador2 from "../assets/avaliador-2.png";
import ImgAvaliador3 from "../assets/avaliador-3.png";

function Info() {
  return (
    <section className="mt-[4rem] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center overflow-hidden">
        <h2 className="text-white w-[85%] text-[24px] font-[700] text-center">
          Como o Tipminer funciona?
        </h2>

        <div className="flex flex-col justify-center w-[85%] items-center">
          <div className="p-[0.8px] bg-gradient-to-l from-[#5E718A] to-[#161036] rounded-2xl w-[100%] mt-[7rem]">
            <div className="bg-[#161036] relative h-[12rem] backdrop-blur-md py-[1rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <img
                src={DadosImg}
                alt=""
                className="w-[211.2px] h-[129.36px] absolute top-[-4.6rem]"
              />
              <p className="text-white text-[16px] font-[400] mt-[3rem]">
                Nossa plataforma analisa dados de jogos em tempo real,{" "}
                <span className="font-bold">
                  identificando padrões vencedores
                </span>
                e oferecendo estratégias otimizadas.
              </p>
            </div>
          </div>

          <div className="p-[0.8px] bg-gradient-to-r from-[#5E718A] to-[#161036] rounded-2xl w-[100%] mt-[3.9rem]">
            <div className="bg-[#161036] relative h-[12rem] backdrop-blur-md py-[1rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <img
                src={CoinsImg}
                alt=""
                className="w-[211.2px] h-[129.36px] absolute top-[-4.6rem]"
              />
              <p className="text-white text-[16px] font-[400] mt-[3rem]">
                Nossa plataforma analisa dados de jogos em tempo real,{" "}
                <span className="font-bold">
                  identificando padrões vencedores
                </span>
                e oferecendo estratégias otimizadas.
              </p>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[2.5rem] text-[14px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>

        <img src={LogosBets} alt="" className="mt-[4rem] w-full" />

        <div className="w-[100%] flex flex-row justify-center relative">
          <div className="absolute right-0 top-0 h-full w-[4rem] bg-gradient-to-r from-transparent to-[#080126] z-10 pointer-events-none" />
          <div className="absolute left-0 top-0 h-full w-[4rem] bg-gradient-to-l from-transparent to-[#080126] z-10 pointer-events-none" />

          <div className="flex justify-center">
            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] translate-x-[-0.8rem] rounded-2xl w-[15.5rem] mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[79%] h-[12.3rem] relative">
                  <p className="text-white text-[13px] font-[600]">
                    "Melhor ferramenta de análise...”
                  </p>
                  <p className="text-white text-[13px] font-[300] mt-[0.8rem] leading-tight">
                    "Usando o TipMiner há anos, simplesmente não há comparação
                    no mercado. A melhor ferramenta de análise de jogos que já
                    usei."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem]">
                    <img
                      src={ImgAvaliador3}
                      alt=""
                      className="w-[36.84px] h-[36.57px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600]">Marina Lopes</p>
                      <p className="text-[7px] font-[300]">@Marina Lopes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] rounded-2xl w-[15.5rem] mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[78.5%] h-[12.3rem] relative">
                  <p className="text-white text-[13px] font-[600]">
                    "Mudou minha abordagem...”
                  </p>
                  <p className="text-white text-[13px] font-[300] mt-[0.8rem] leading-tight">
                    "O TipMiner mudou completamente minha abordagem nos jogos
                    online. Agora, faço apostas baseadas em análise de dados e
                    vejo uma grande diferença nos meus resultados."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem]">
                    <img
                      src={ImgAvaliador1}
                      alt=""
                      className="w-[36.84px] h-[36.57px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600]">João Carlos</p>
                      <p className="text-[7px] font-[300]">@João Carlos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#3d3561] to-[#100a2e] translate-x-[0.8rem] rounded-2xl w-[15.5rem] mt-[4rem]">
              <div className="bg-[#100a2e]/70 h-[14.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
                <div className="flex flex-col w-[78.5%] h-[12.3rem] relative">
                  <p className="text-white text-[13px] font-[600]">
                    "Mudou minha abordagem...”
                  </p>
                  <p className="text-white text-[13px] font-[300] mt-[0.8rem] leading-tight">
                    "Incrível como o TipMiner simplifica a análise complexa de
                    dados. Minhas decisões nunca foram tão precisas."
                  </p>

                  <div className="flex flex-row absolute top-[9.6rem]">
                    <img
                      src={ImgAvaliador2}
                      alt=""
                      className="w-[36.84px] h-[36.57px]"
                    />

                    <div className="flex flex-col items-start justify-center ml-[0.5rem]">
                      <p className="text-[9.5px] font-[600]">Ana Beatriz</p>
                      <p className="text-[7px] font-[300]">@Ana Beatriz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[2.5rem] text-[14px] px-[1.3rem] py-[0.8rem] w-[85%] text-center rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>
      </div>
    </section>
  );
}

export default Info;
