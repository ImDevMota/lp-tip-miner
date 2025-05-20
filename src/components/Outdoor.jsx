import Logo from "../assets/logo-tip-miner.svg";
import OutdoorBg from "../assets/outdoor-tip-miner.png";

function Outdoor() {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center">
        <div
          className="bg-cover bg-center bg-no-repeat h-[32rem] flex flex-col items-center mt-[5rem] relative"
          style={{ backgroundImage: `url(${OutdoorBg})` }}
        >
          <img src={Logo} alt="" className="absolute top-[-2.2rem]" />

          <div className="flex flex-col w-[84%]">
            <h2 className="text-white text-center mt-[24.8rem] leading-tight text-[24px] font-[600]">
              Você vai se tornar o pior pesadelo dos cassinos online,
            </h2>
            <p className="text-[23px] font-[600] text-center leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#03BDE3] to-[#0515E7]">
              enchendo o bolso de dinheiro
            </p>

            <p></p>

            <p></p>
          </div>

          <button></button>
        </div>

        <img src="" alt="" />

        <div>
          <h2></h2>

          <p></p>
          <p></p>
        </div>
      </div>
    </section>
  );
}

export default Outdoor;
