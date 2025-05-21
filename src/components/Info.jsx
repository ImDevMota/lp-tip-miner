import DadosImg from "../assets/dados.png";
import CoinsImg from "../assets/coins.png";
import LogosBets from "../assets/logos-bets.png";

function Info() {
  return (
    <section className="mt-[4rem] flex justify-center items-center">
      <div className="flex flex-col w-[85%]">
        <h2 className="text-white text-[24px] font-[700] text-center">
          Como o Tipminer funciona?
        </h2>

        <div className="flex flex-col justify-center items-center">
          <div className="p-[0.8px] bg-gradient-to-l from-[#5E718A] to-[#161036] rounded-2xl w-[22rem] mt-[7rem]">
            <div className="bg-[#161036] relative h-[12rem] backdrop-blur-md py-[1rem] px-[1.5rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <img
                src={DadosImg}
                alt=""
                className="w-[211.2px] h-[129.36px] absolute top-[-4.6rem]"
              />
              <p className="text-white text-[16px] font-[400] mt-[3rem]">
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

          <div className="p-[0.8px] bg-gradient-to-r from-[#5E718A] to-[#161036] rounded-2xl w-[22rem] mt-[3.9rem]">
            <div className="bg-[#161036] relative h-[12rem] backdrop-blur-md py-[1rem] px-[1.5rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <img
                src={CoinsImg}
                alt=""
                className="w-[211.2px] h-[129.36px] absolute top-[-4.6rem]"
              />
              <p className="text-white text-[16px] font-[400] mt-[3rem]">
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

        <a className="text-[white] mt-[2.5rem] text-[14px] px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>

        <img src={LogosBets} alt="" className="mt-[4rem]" />

        <div>
          <div>
            <h3></h3>
            <p></p>

            <div>
              <img src="" alt="" />

              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>

          <div>
            <h3></h3>
            <p></p>

            <div>
              <img src="" alt="" />

              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>

          <div>
            <h3></h3>
            <p></p>

            <div>
              <img src="" alt="" />

              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <button></button>
      </div>
    </section>
  );
}

export default Info;
