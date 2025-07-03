import SeloImg from "../assets/selo.png";

function Seal() {
  return (
    <section className="flex justify-center items-center mt-[5rem] sm:mt-[8rem]">
      <div className="flex flex-col w-[85%] sm:w-[70%] justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img src={SeloImg} alt="" className="w-[19rem]" />

          <p className="text-white text-[14px] sm:text-[24px] font-[400] text-center mt-[1.7rem]">
            No TipMiner, estamos comprometidos não <br className="sm:hidden" />
            apenas em aumentar seus ganhos nos jogos{" "}
            <br className="sm:block hidden" />
            online, mas também em garantir sua total{" "}
            <br className="sm:hidden" />
            satisfação e confiança em nossas ferramentas.
          </p>
          <p className="text-white text-[14px] sm:text-[24px] font-[400] text-center mt-[0.6rem]">
            Por isso, oferecemos a você uma Garantia de{" "}
            <br className="sm:hidden" />
            Satisfação de <span className="font-bold">7 Dias</span> em todos os
            nossos planos - <br className="sm:hidden" />
            Silver, <br className="sm:block hidden" /> Gold e Platinum. Queremos
            que você explore <br className="sm:hidden" />o TipMiner com a
            tranquilidade de saber que sua <br className="sm:hidden" />
            decisão <br className="sm:block hidden" /> é totalmente respaldada
            por nossa garantia <br className="sm:hidden" />
            de satisfação.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Seal;
