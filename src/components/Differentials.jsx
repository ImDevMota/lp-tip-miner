import { Compass, LaptopMinimalCheck } from "lucide-react";
import CompassImg from "../assets/compass.svg";
import DatabaseImg from "../assets/database.svg";
import RunImg from "../assets/run.svg";
import Elipse2Img from "../assets/elipse-2.png";

function Differentials() {
  return (
    <section className="mt-[2rem] flex justify-center items-center relative">
      <div className="flex flex-col w-[85%] mb-[3rem]">
        <h2 className="text-white text-[24px] font-[700] text-center">
          Quais São Os <br />
          Diferenciais do TipMiner:
        </h2>

        <div className="flex flex-col items-center justify-center mt-[2rem] gap-y-[1rem]">
          <div className="p-[1px] bg-[#FFFFFF4D] rounded-2xl w-[20.7rem]">
            <div className="bg-[#100a2e]/90 h-[12.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
              <div className="flex flex-col w-[82%] h-[12.3rem] justify-center">
                <div className="flex rounded-full w-fit border-[0.12rem] border-[#FFFFFF4D]">
                  <img src={CompassImg} alt="" className="w-[38px] h-[38px]" />
                </div>
                <p className="text-white text-[12.9px] font-[300] mt-[1.2rem]">
                  <span className="font-bold">Precisão Analítica: </span>
                  Imagine ter uma bússola dos <br />
                  jogos ao seu lado, guiando cada aposta com <br />
                  insights gerados por dados avançados, sobre <br />
                  quando, onde e como apostar para ganhar.
                </p>
              </div>
            </div>
          </div>

          <div className="p-[1px] bg-[#FFFFFF4D] rounded-2xl w-[20.7rem]">
            <div className="bg-[#100a2e]/90 h-[12.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
              <div className="flex flex-col h-[12.3rem] justify-center">
                <div className="flex rounded-full w-fit p-[0.62rem] border-[0.12rem] border-[#FFFFFF4D]">
                  <img
                    src={DatabaseImg}
                    alt=""
                    className="w-[18.5px] h-[18.5px]"
                  />
                </div>
                <p className="text-white text-[12.9px] font-[300] mt-[1.2rem]">
                  <span className="font-bold">Análise Avançada de Jogos: </span>
                  O TipMiner desvenda <br />
                  os segredos dos maiores dos jogos online, <br />
                  oferecendo análises tão profundas que você sentirá <br />
                  como se pudesse prever o futuro. Cada movimento <br />é uma
                  jogada calculada rumo à riqueza.
                </p>
              </div>
            </div>
          </div>

          <div className="p-[1px] bg-[#FFFFFF4D] rounded-2xl w-[20.7rem]">
            <div className="bg-[#100a2e]/90 h-[12.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
              <div className="flex flex-col w-[82%] h-[12.3rem] justify-center">
                <div className="flex rounded-full w-fit p-[0.5rem] border-[0.12rem] border-[#FFFFFF4D]">
                  <LaptopMinimalCheck size={23} className="text-[#02C1E3]" />
                </div>
                <p className="text-white text-[12.9px] font-[300] mt-[1.2rem]">
                  <span className="font-bold">Excelência do Software: </span>O
                  TipMiner não é <br />
                  apenas um software qualquer; é uma ferramenta <br />
                  desenvolvida com o máximo de excelência <br />
                  e eficácia, desenhada para acertar os resultados <br />
                  com base em dados e análise de padrões.
                </p>
              </div>
            </div>
          </div>

          <div className="p-[1px] bg-[#FFFFFF4D] rounded-2xl w-[20.7rem]">
            <div className="bg-[#100a2e]/90 h-[12.5rem] backdrop-blur-md py-[1rem] items-center justify-center rounded-2xl text-[white] flex flex-col">
              <div className="flex flex-col w-[82%] h-[12.3rem] justify-center">
                <div className="flex rounded-full w-fit p-[0.5rem] border-[0.12rem] border-[#FFFFFF4D]">
                  <img src={RunImg} alt="" className="w-[24px] h-[24px]" />
                </div>
                <p className="text-white text-[12.9px] font-[300] mt-[1.2rem]">
                  <span className="font-bold">Automatização e Rapidez: </span>
                  No mundo dos jogos online, a velocidade é tão crucial quanto a{" "}
                  <br />
                  estratégia. Com o TipMiner, você está sempre um <br />
                  passo à frente, graças à nossa plataforma ágil <br />
                  que automatiza a análise e a tomada de decisões.
                </p>
              </div>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[1rem] text-[14px] px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>
      </div>

      <img src={Elipse2Img} alt="" className="absolute bottom-2" />
    </section>
  );
}

export default Differentials;
