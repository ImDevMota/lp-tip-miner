import Logo from "../assets/logo-tip-miner.svg";
import OutdoorBg from "../assets/outdoor-tip-miner.png";
import LogosBets from "../assets/logos-bets.png";

function Outdoor() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-center items-center">
        <div
          className="absolute top-0 left-0 w-full h-[35rem] mt-[5rem] bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${OutdoorBg})` }}
        />

        <div className="relative z-10 flex flex-col items-center mt-[3rem]">
          {/* Imagem não precisa ser absolute — apenas ajustada no layout */}
          <img src={Logo} alt="Logo" className="" />

          <div className="flex flex-col w-[85%] mt-[25.8rem]">
            <h2 className="text-white text-center leading-tight text-[24px] font-[600]">
              Você vai se tornar o pior pesadelo dos cassinos online,{" "}
              <span className="text-[23px] font-[600] text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#03BDE3] to-[#0515E7]">
                enchendo o bolso de dinheiro
              </span>
            </h2>

            <div className="flex flex-row justify-center mt-[2rem]">
              <p
                className="text-transparent bg-clip-text font-[600] text-[22px] mr-[1.5rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #1CC47E 0%, #6BFF53 50%, #1CC47E 100%)",
                }}
              >
                *
              </p>
              <p
                className="bg-clip-text text-transparent tracking-wide font-[600] text-[14px] mt-[0.18rem] text-center"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #1CC47E 0%, #6BFF53 50%, #1CC47E 100%)",
                }}
              >
                Chega de depender apenas da sorte!
              </p>
              <p
                className="text-transparent bg-clip-text font-[600] text-[22px] ml-[1.5rem]"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #1CC47E 0%, #6BFF53 50%, #1CC47E 100%)",
                }}
              >
                *
              </p>
            </div>

            <p className="text-[16px] font-[400] text-[white] text-center mt-[1.5rem]">
              Tenha em mãos o sistema exclusivo do TipMiner para dominar os
              resultados dos jogos online. Garanta seus ganhos de forma
              automatizada com o nosso software de análise e estratégia
              imbatível.
            </p>
          </div>

          {/* Botão */}
          <a className="text-[white] mt-[2.5rem] text-[14px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
            Quero aumentar meus lucros com o TipMiner
          </a>

          {/* Imagem de marcas/parceiros */}
          <img src={LogosBets} alt="Parceiros" className="mt-[4rem] w-full" />

          {/* Bloco informativo */}
          <div className="p-[1.5px] bg-gradient-to-b from-[#5F858E] to-[#100a2e] rounded-2xl w-[85%] mt-[4rem]">
            <div className="bg-[#100a2e] backdrop-blur-md py-[3rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <div className="flex flex-col w-[85%]">
                <h2 className="font-[600] text-[32px]">
                  Por que entrar no tipminer?
                </h2>
                <p className="font-[400] text-[16px] tracking-wide mt-[2.5rem]">
                  O propósito do TipMiner é{" "}
                  <span className="font-bold mr-[4px]">
                    democratizar o sucesso nos jogos online
                  </span>
                  , empoderando jogadores com dados e análises precisas para que
                  tomem decisões estratégicas e ganhem com confiança.
                </p>
                <p className="font-[400] text-[16px] tracking-wide mt-[1.5rem]">
                  Acreditamos que, através de conhecimento e tecnologia, todos
                  podem transformar sua paixão por jogos em vitórias
                  significativas e lucrativas, sem depender da sorte
                </p>
              </div>
            </div>
          </div>

          {/* Chamada final */}
          <div className="flex flex-col w-[85%]">
            <p className="font-[700] text-center text-white text-[16px] mt-[5rem]">
              Quer ganhar de verdade nos jogos online?
            </p>

            <h2 className="text-[28px] mt-[1.5rem] font-[700] text-center text-transparent bg-clip-text bg-gradient-to-r from-[#03BDE3] to-[#0515E7]">
              TipMiner é a sua ferramenta essencial.
            </h2>

            <a className="text-[white] mt-[3.5rem] text-center text-[14px] px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
              Quero aumentar meus lucros com o TipMiner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Outdoor;
