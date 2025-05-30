import { Check } from "lucide-react";

function Plans() {
  return (
    <section className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-[85%]">
        <div className="p-[1.5px] bg-gradient-to-b from-[#5F858E] to-[#261f44] rounded-2xl w-[100%] mt-[1rem]">
          <div className="bg-[#100a2e] backdrop-blur-md py-[3.3rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
            <h2 className="font-[700] text-[28px]">
              Escolha o melhor <br />
              plano para você!!
            </h2>

            <p className="font-[400] text-[18px]  mt-[1.5rem]">
              O TipMiner separou os melhores <br />
              planos para melhorar os seus <br />
              resultados nos cassinos online, <br />
              venha e aproveite:
            </p>
          </div>
        </div>

        <h2 className="font-[700] text-white text-[21px] text-center mt-[3.7rem]">
          Não importa onde você começa, <br />
          mas onde você pode chegar.
        </h2>
        <p className="font-[400] text-white text-[18px] text-center mt-[2rem]">
          Escolha o plano TipMiner que mais se <br />
          alinha com seus objetivos e transforme <br />
          sua paixão em vitórias.
        </p>

        <div>
          <div className="p-[1.5px] bg-gradient-to-b from-[#5F858E] to-[#261f44] rounded-2xl w-[100%] mt-[1rem]">
            <div className="bg-[#100a2e] backdrop-blur-md py-[3.3rem] px-[1.6rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
              <h3 className="text-white font-[700] text-[24px]">
                Plano Silver
              </h3>
              <p className="text-white font-[500] text-[12px]">
                Acesso por 30 dias
              </p>

              <h2 className="text-white font-[700] text-[54px]">R$ 49,90</h2>
              <p className="text-white font-[300] text-[15px]">
                *Assinatura renovada automaticamente
              </p>

              <div className="flex flex-col mt-[3rem] items-start w-[100%]">
                <div className="flex flex-row items-center gap-x-[0.5rem]">
                  <Check className="text-[#02C1E3]" />
                  <p className="font-[400] text-[15px]">
                    Visualização de 20 mil rodadas
                  </p>
                </div>

                <div className="flex flex-row items-center gap-x-[0.5rem]">
                  <Check className="text-[#02C1E3]" />
                  <p className="font-[400] text-[15px]">
                    Cores por hora e/ou dias
                  </p>
                </div>

                <div className="flex flex-row items-center gap-x-[0.5rem]">
                  <Check className="text-[#02C1E3]" />
                  <p className="font-[400] text-[15px]">Modo analítico</p>
                </div>

                <div className="flex flex-row items-center gap-x-[0.5rem]">
                  <Check className="text-[#02C1E3]" />
                  <p className="font-[400] text-[15px]">
                    Validador e notificador sem limites
                  </p>
                </div>

                <div className="flex flex-row items-center gap-x-[0.5rem]">
                  <Check className="text-[#02C1E3]" />
                  <p className="font-[400] text-[15px]">Sem anúncios</p>
                </div>

                <div className="flex flex-row items-center gap-x-[0.5rem]">
                  <Check className="text-[#02C1E3]" />
                  <p className="font-[400] text-[15px]">5 Bots de sinais</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3></h3>
            <p></p>

            <h2></h2>
            <p></p>

            <div>
              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>
            </div>
          </div>

          <div>
            <h3></h3>
            <p></p>

            <h2></h2>
            <p></p>

            <div>
              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>

              <div>
                <Check className="text-[#02C1E3]" />
                <p></p>
              </div>
            </div>
          </div>

          <button></button>
        </div>

        <div>
          <Check className="text-[#02C1E3]" />

          <div>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
