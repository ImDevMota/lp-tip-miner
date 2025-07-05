import Elipse1Img from "../assets/elipse-1.png";
import Elipse1DesktopImg from "../assets/elipse-1-desktop.png";

function Questions() {
  return (
    <section className="flex justify-center items-center relative sm:mt-[6rem] mt-[2rem] mb-[3.5rem] sm:mb-[5rem]">
      <img
        src={Elipse1DesktopImg}
        alt=""
        className="sm:block hidden absolute top-0 w-[100%] z-[-1]"
      />

      <img
        src={Elipse1Img}
        alt=""
        className="absolute block sm:hidden top-0 left-0 w-[100%]"
      />

      <div className="flex flex-col w-[85%] sm:w-[70%] sm:mt-[4em] justify-center items-center sm:flex-row sm:justify-between">
        <h2 className="text-[32px] mt-[3rem] leading-[3.5rem] font-[700] sm:text-start sm:text-[48px] text-center bg-gradient-to-r from-[#04B6E4] to-[#053DE7] bg-clip-text text-transparent">
          FAQ - Perguntas <br />
          Frequentes sobre <br className="sm:block hidden" /> o{" "}
          <br className="sm:hidden block" />
          TipMiner
        </h2>

        <div className="flex flex-col w-[98%] sm:w-[55%]">
          <div className="flex flex-col mt-[2.5rem]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <p className="text-white text-[16px] sm:text-[18px] font-[600] mr-[0.4rem]">
                  1.
                </p>
                <p className="text-white text-[16px] sm:text-[18px] font-[600]">
                  Como o TipMiner pode melhorar{" "}
                  <br className="sm:hidden block" />
                  minhas chances nos jogos online?
                </p>
              </div>

              <button className="text-white leading-none text-[26px] font-bold flex items-start justify-start">
                +
              </button>
            </div>

            <div></div>
          </div>

          <div className="flex flex-col mt-[2.5rem]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <p className="text-white text-[16px] sm:text-[18px] font-[600] mr-[0.4rem]">
                  2.
                </p>
                <p className="text-white text-[16px] sm:text-[18px] font-[600]">
                  Os planos do TipMiner vêm com{" "}
                  <br className="sm:hidden block" />
                  algum tipo de compromisso ou <br />
                  contrato a longo prazo?
                </p>
              </div>

              <button className="text-white leading-none text-[26px] font-bold flex items-start justify-start">
                +
              </button>
            </div>

            <div></div>
          </div>

          <div className="flex flex-col mt-[2.5rem]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <p className="text-white text-[16px] sm:text-[18px] font-[600] mr-[0.4rem]">
                  3.
                </p>
                <p className="text-white text-[16px] sm:text-[18px] font-[600]">
                  Posso mudar de plano depois <br className="sm:hidden block" />
                  de assinar?
                </p>
              </div>

              <button className="text-white leading-none text-[26px] font-bold flex items-start justify-start">
                +
              </button>
            </div>

            <div></div>
          </div>

          <div className="flex flex-col mt-[2.5rem]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <p className="text-white text-[16px] sm:text-[18px] font-[600] mr-[0.4rem]">
                  4.
                </p>
                <p className="text-white text-[16px] sm:text-[18px] font-[600]">
                  E se eu tiver dúvidas ou precisar de{" "}
                  <br className="sm:hidden block" />
                  suporte?
                </p>
              </div>

              <button className="text-white leading-none text-[26px] font-bold flex items-start justify-start">
                +
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
