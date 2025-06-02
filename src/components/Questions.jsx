import Elipse1Img from "../assets/elipse-1.png";

function Questions() {
  return (
    <section className="flex justify-center items-center relative mt-[2rem] mb-[3.5rem]">
      <div className="flex flex-col w-[85%] justify-center items-center">
        <img src={Elipse1Img} alt="" className="absolute top-0 left-0" />

        <h2 className="text-[32px] mt-[3rem] font-[700] text-center bg-gradient-to-r from-[#04B6E4] to-[#053DE7] bg-clip-text text-transparent">
          FAQ - Perguntas <br />
          Frequentes sobre o <br />
          TipMiner
        </h2>

        <div className="flex flex-col w-[98%]">
          <div className="flex flex-col mt-[2.5rem]">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <p className="text-white text-[16px] font-[600] mr-[0.4rem]">
                  1.
                </p>
                <p className="text-white text-[16px] font-[600]">
                  Como o TipMiner pode melhorar <br />
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
                <p className="text-white text-[16px] font-[600] mr-[0.4rem]">
                  2.
                </p>
                <p className="text-white text-[16px] font-[600]">
                  Os planos do TipMiner vêm com <br />
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
                <p className="text-white text-[16px] font-[600] mr-[0.4rem]">
                  3.
                </p>
                <p className="text-white text-[16px] font-[600]">
                  Posso mudar de plano depois <br />
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
                <p className="text-white text-[16px] font-[600] mr-[0.4rem]">
                  4.
                </p>
                <p className="text-white text-[16px] font-[600]">
                  E se eu tiver dúvidas ou precisar de <br />
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
