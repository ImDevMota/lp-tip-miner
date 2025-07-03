import Elipse1Img from "../assets/elipse-1.png";
import BgRoulette from "../assets/bg-roulette.png";
import Elipse1DesktopImg from "../assets/elipse-1-desktop.png";
import ImgRoulette1 from "../assets/Group-1.png";
import ImgRouletteDesktop1 from "../assets/Group-1-desktop.png";
import ImgRoulette2 from "../assets/Group-2.png";
import ImgRouletteDesktop2 from "../assets/Group-2-desktop.png";
import ImgRoulette3 from "../assets/Group-3.svg";
import ImgRouletteDesktop3 from "../assets/Group-3-desktop.svg";
import ImgRoulette4 from "../assets/Group-4.png";
import ImgRouletteDesktop4 from "../assets/Group-4-desktop.png";
import ImgRoulette5 from "../assets/Group-5.png";
import ImgRouletteDesktop5 from "../assets/Group-5-desktop.png";
import ImgRouletteDesktop6 from "../assets/Group-6-desktop.png";
import ImgRouletteDesktop7 from "../assets/Group-7-desktop.png";
import SetaIconImg1 from "../assets/seta-1.png";
import SetaIconImg2 from "../assets/seta-2.png";
import SetaIconImgDesktop1 from "../assets/seta-1-desktop.png";
import SetaIconImgDesktop2 from "../assets/seta-2-desktop.png";

function Roulette() {
  return (
    <section className="mt-[2rem] sm:mt-[5.5rem]">
      <div className="flex flex-col justify-center items-center relative">
        <img
          src={Elipse1Img}
          alt=""
          className="block sm:hidden absolute top-0 w-[100%]"
        />
        <img
          src={Elipse1DesktopImg}
          alt=""
          className="sm:block hidden absolute top-0 w-[100%] z-[-1]"
        />

        <div className="flex flex-col mt-[5rem] w-[85%]">
          <h2 className="text-white font-[700] text-[21px] sm:text-[40px] text-center">
            A TipMiner analisa milhões de <br className="sm:hidden block" />
            resultados e padrões de <br className="hidden sm:block" /> jogos,{" "}
            <br className="sm:hidden block" />
            oferecendo a você estratégias <br className="sm:hidden block" />
            personalizadas.
          </h2>

          <div className="flex flex-row items-center mt-[5rem] sm:mt-[3rem] absolute w-[100%] sm:w-[65%] left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-[13rem] justify-between overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-32 sm:w-[17.5rem] bg-gradient-to-r from-[#080126]/80  sm:from-[#080126] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 sm:w-[17.5rem] bg-gradient-to-l from-[#080126]/80 sm:from-[#080126] to-transparent z-10 pointer-events-none" />
            <img
              src={ImgRouletteDesktop6}
              alt=""
              className="sm:w-[148px] sm:h-[148px] sm:block hidden"
            />

            <img
              src={ImgRoulette1}
              alt=""
              className="w-[1.5rem] h-[5.5rem] sm:hidden block"
            />

            <img
              src={ImgRouletteDesktop1}
              alt=""
              className="sm:w-[148px] sm:h-[148px] sm:block hidden"
            />

            <img
              src={ImgRoulette2}
              alt=""
              className="w-[91.32px] h-[91.32px] block sm:hidden"
            />

            <img
              src={ImgRouletteDesktop2}
              alt=""
              className="sm:w-[148px] sm:h-[148px] sm:block hidden"
            />

            <div className="flex flex-col flex-shrink-0 justify-center items-center relative h-[7rem] sm:h-[170px]">
              <img
                src={SetaIconImg1}
                alt=""
                className="w-[0.8rem] h-[0.8rem] block sm:hidden absolute top-[0.3rem]"
              />

              <img
                src={SetaIconImgDesktop1}
                alt=""
                className="w-[24px] h-[22px] sm:block hidden absolute top-[0.05rem]"
              />

              <img
                src={ImgRoulette3}
                alt=""
                className="w-[91.32px] h-[91.32px] bg-white rounded-md block sm:hidden  pr-[0.3rem] py-[0.3rem]"
              />

              <img
                src={ImgRouletteDesktop3}
                alt=""
                className="w-[148px] h-[148px] sm:block hidden bg-white rounded-md pr-[0.3rem] py-[0.4rem]"
              />

              <img
                src={SetaIconImg2}
                alt=""
                className="w-[0.8rem] h-[0.8rem] block sm:hidden absolute bottom-[0.3rem]"
              />

              <img
                src={SetaIconImgDesktop2}
                alt=""
                className="w-[24px] h-[22px] sm:block hidden absolute bottom-[0.05rem]"
              />
            </div>

            <img
              src={ImgRoulette4}
              alt=""
              className="w-[91.32px] h-[91.32px] block sm:hidden"
            />

            <img
              src={ImgRouletteDesktop4}
              alt=""
              className="sm:w-[148px] sm:h-[148px] sm:block hidden"
            />

            <img
              src={ImgRoulette5}
              alt=""
              className="w-[1.5rem] h-[5.5rem] sm:hidden block"
            />

            <img
              src={ImgRouletteDesktop5}
              alt=""
              className="sm:w-[148px] sm:h-[148px] sm:block hidden"
            />

            <img
              src={ImgRouletteDesktop7}
              alt=""
              className="sm:w-[148px] sm:h-[148px] sm:block hidden"
            />
          </div>

          <p className="text-white text-[16px] sm:text-[24px] font-[400] text-center mt-[15rem] sm:mt-[19rem]">
            Utilize nosso sistema de validação de{" "}
            <br className="block sm:hidden" />
            padrões para garantir uma <br className="hidden sm:block" />{" "}
            vantagem nos <br className="block sm:hidden" />
            jogos online, obtendo ganhos automáticos.
          </p>
        </div>
        {/* verificar comprimento da img */}
        <img
          src={BgRoulette}
          alt=""
          className="hidden sm:block absolute bottom-[-24rem] z-[-1]"
        />
      </div>
    </section>
  );
}

export default Roulette;
