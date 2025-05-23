import Elipse1Img from "../assets/elipse-1.png";
import ImgRoulette1 from "../assets/Group-1.png";
import ImgRoulette2 from "../assets/Group-2.png";
import ImgRoulette3 from "../assets/Group-3.svg";
import ImgRoulette4 from "../assets/Group-4.png";
import ImgRoulette5 from "../assets/Group-5.png";
import SetaIconImg1 from "../assets/seta-1.png";
import SetaIconImg2 from "../assets/seta-2.png";

function Roulette() {
  return (
    <section className="mt-[2rem]">
      <div className="flex flex-col justify-center items-center relative">
        <img src={Elipse1Img} alt="" className="absolute top-0" />

        <div className="flex flex-col mt-[5rem] w-[85%]">
          <h2 className="text-white font-[700] text-[23px] text-center">
            A TipMiner analisa milhões de <br />
            resultados e padrões de jogos, <br />
            oferecendo a você estratégias <br />
            personalizadas.
          </h2>

          <div className="flex flex-row items-center mt-[5rem] absolute w-[100%] left-0 top-[13rem] justify-between overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#080126]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#080126]/80 to-transparent z-10 pointer-events-none" />
            <img src={ImgRoulette1} alt="" className="w-[1.5rem] h-[5.5rem] " />
            <img
              src={ImgRoulette2}
              alt=""
              className="w-[91.32px] h-[91.32px]"
            />

            <div className="flex flex-col justify-center items-center relative h-[7rem]">
              <img
                src={SetaIconImg1}
                alt=""
                className="w-[0.8rem] h-[0.8rem] absolute top-[0.3rem]"
              />
              <img
                src={ImgRoulette3}
                alt=""
                className="w-[91.32px] h-[91.32px] bg-white rounded-md  pr-[0.3rem] py-[0.3rem]"
              />
              <img
                src={SetaIconImg2}
                alt=""
                className="w-[0.8rem] h-[0.8rem] absolute bottom-[0.3rem]"
              />
            </div>

            <img
              src={ImgRoulette4}
              alt=""
              className="w-[91.32px] h-[91.32px]"
            />
            <img src={ImgRoulette5} alt="" className="w-[1.5rem] h-[5.5rem]" />
          </div>

          <p className="text-white text-[16px] font-[400] text-center mt-[15rem]">
            Utilize nosso sistema de validação de <br />
            padrões para garantir uma vantagem nos <br />
            jogos online, obtendo ganhos automáticos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Roulette;
