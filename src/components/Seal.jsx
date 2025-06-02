import SeloImg from "../assets/selo.png";

function Seal() {
  return (
    <section className="flex justify-center items-center mt-[5rem]">
      <div className="flex flex-col w-[85%] justify-center items-center">
        <div className="flex flex-col">
          <img src={SeloImg} alt="" className="w-[19rem]" />

          <p className="text-white text-[14px] font-[400] text-center mt-[1.7rem]">
            No TipMiner, estamos comprometidos não <br />
            apenas em aumentar seus ganhos nos jogos <br />
            online, mas também em garantir sua total <br />
            satisfação e confiança em nossas ferramentas.
          </p>
          <p className="text-white text-[14px] font-[400] text-center mt-[0.6rem]">
            Por isso, oferecemos a você uma Garantia de <br />
            Satisfação de <span className="font-bold">7 Dias</span> em todos os
            nossos planos - <br />
            Silver, Gold e Platinum. Queremos que você explore <br />o TipMiner
            com a tranquilidade de saber que sua <br />
            decisão é totalmente respaldada por nossa garantia <br />
            de satisfação.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Seal;
