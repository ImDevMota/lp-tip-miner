import { Check } from "lucide-react";
import BgPlans from "../assets/bg-plans.png";

function Plans() {
  return (
    <section className="flex justify-center items-center relative">
      <div className="flex flex-col justify-center items-center w-[85%]">
        <div className="p-[1.5px] bg-gradient-to-b from-[#5F858E] to-[#261f44] rounded-2xl w-[100%] sm:w-[80%] mt-[1rem] sm:mt-[4rem]">
          <div className="bg-[#100a2e] sm:flex-row backdrop-blur-md sm:gap-x-[8rem] py-[3.3rem] sm:py-[4rem] rounded-2xl text-[white] text-center flex flex-col justify-center items-center">
            <h2 className="font-[700] text-[28px] sm:text-start mt-[0.8rem] sm:leading-[4rem] sm:text-[56px]">
              Escolha o melhor <br />
              plano para você!!
            </h2>

            <p className="font-[400] text-[18px] w-[85%] sm:text-start sm:w-fit sm:text-[30px] mt-[1.5rem]">
              O TipMiner separou os melhores planos <br />
              para melhorar os seus resultados nos <br />
              cassinos online, venha e aproveite:
            </p>
          </div>
        </div>

        <h2 className="font-[700] text-white text-[21px] text-center sm:text-[32px] mt-[3.7rem]">
          Não importa onde você começa, mas onde você pode chegar.
        </h2>
        <p className="font-[400] text-white text-[18px] sm:text-[24px] text-center mt-[2rem]">
          Escolha o plano TipMiner que mais se alinha com seus objetivos e
          transforme sua paixão em vitórias.
        </p>

        <div className="flex flex-col sm:flex-row sm:gap-x-[1rem]">
          <div className="p-[0.8px] overflow-hidden bg-gradient-to-b from-[#ffffff60] to-[#100a2e] rounded-xl w-[100%] sm:w-[26rem] sm:h-[34.7rem] mt-[4rem]">
            <div className="bg-[#100a2e] backdrop-blur-md py-[3.3rem] sm:py-[4rem] px-[1.6rem] rounded-xl text-[white] text-center flex flex-col ">
              <div class="absolute top-[-2.5rem] w-[95%] h-[8.35rem] bg-[#dfdee4] rounded-full blur-[3.7rem] opacity-15"></div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-white font-[700] text-[24px] sm:text-[32px]">
                  Plano Silver
                </h3>
                <p className="text-white font-[500] text-[12px] sm:text-[16px] mt-[-0.4rem]">
                  Acesso por 30 dias
                </p>
              </div>

              <div className="flex flex-col mt-[1.6rem] items-center">
                <div className="flex flex-col items-start">
                  <h2 className="text-white font-[700] text-[54px] sm:text-[64px]">
                    R$ 49,90
                  </h2>
                  <p className="text-white font-[300] text-[15px] sm:text-[18px]">
                    *Assinatura renovada automaticamente
                  </p>

                  <div className="flex flex-col mt-[3rem]">
                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Visualização de 20 mil rodadas
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Cores por hora e/ou dias
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Modo analítico
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Validador e notificador ilimitados
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Sem anúncios
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        5 Bots de sinais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[0.8px] overflow-hidden bg-gradient-to-b from-[#ffffff60] to-[#100a2e] rounded-xl w-[100%] sm:w-[26rem] sm:h-[34.7rem] mt-[4rem]">
            <div className="bg-[#100a2e] backdrop-blur-md py-[3.3rem] sm:py-[4rem]  px-[1.6rem] rounded-xl text-[white] text-center flex flex-col ">
              <div class="absolute top-[-2.5rem] w-[95%] h-[8.35rem] bg-[#dfdee4] rounded-full blur-[3.7rem] opacity-15"></div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-white font-[700] text-[24px] sm:text-[32px]">
                  Plano Gold
                </h3>
                <p className="text-white font-[500] text-[12px] sm:text-[16px] mt-[-0.4rem]">
                  Acesso por 30 dias
                </p>
              </div>

              <div className="flex flex-col mt-[1.6rem] items-center">
                <div className="flex flex-col items-start">
                  <h2 className="text-white font-[700] text-[54px] sm:text-[64px]">
                    R$ 59,90
                  </h2>
                  <p className="text-white font-[300] text-[15px] sm:text-[18px]">
                    *Assinatura renovada automaticamente
                  </p>

                  <div className="flex flex-col mt-[3rem]">
                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Visualização de 20 mil rodadas
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Cores por hora e/ou dias
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Modo analítico
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Validador e notificador ilimitados
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Sem anúncios
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        5 Bots de sinais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[0.8px] overflow-hidden bg-gradient-to-b from-[#ffffff60] to-[#100a2e] rounded-xl w-[100%] sm:w-[26rem] sm:h-[34.7rem] mt-[4rem]">
            <div className="bg-[#100a2e] backdrop-blur-md py-[3.3rem] sm:py-[4rem]  px-[1.6rem] rounded-xl text-[white] text-center flex flex-col ">
              <div class="absolute top-[-2.5rem] w-[95%] h-[8.35rem] bg-[#dfdee4] rounded-full blur-[3.7rem] opacity-15"></div>

              <div className="flex flex-col items-center text-center">
                <h3 className="text-white font-[700] text-[24px] sm:text-[32px]">
                  Plano Platinum
                </h3>
                <p className="text-white font-[500] text-[12px] sm:text-[16px] mt-[-0.4rem]">
                  Acesso por 30 dias
                </p>
              </div>

              <div className="flex flex-col mt-[1.6rem] items-center">
                <div className="flex flex-col items-start">
                  <h2 className="text-white font-[700] text-[54px] sm:text-[64px]">
                    R$ 89,90
                  </h2>
                  <p className="text-white font-[300] text-[15px] sm:text-[18px]">
                    *Assinatura renovada automaticamente
                  </p>

                  <div className="flex flex-col mt-[3rem]">
                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Visualização de 20 mil rodadas
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Cores por hora e/ou dias
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Modo analítico
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Validador e notificador ilimitados
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        Sem anúncios
                      </p>
                    </div>

                    <div className="flex flex-row items-center gap-x-[0.5rem]">
                      <Check className="text-[#02C1E3]" />
                      <p className="font-[400] text-[15px] sm:text-[18px] whitespace-nowrap">
                        5 Bots de sinais
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a className="text-[white] mt-[2.5rem] sm:mt-[6rem] sm:mb-[2.5rem] text-[14px] sm:w-[32.35rem] sm:justify-center sm:flex sm:whitespace-nowrap sm:py-[1.1rem] sm:text-[20px] w-[85%] text-center px-[1.3rem] py-[0.8rem] rounded-md font-[600] bg-gradient-to-r from-[#02C1E3] to-[#0412E7]">
          Quero aumentar meus lucros com o TipMiner
        </a>
      </div>

      <img
        src={BgPlans}
        alt=""
        className="hidden sm:block absolute bottom-[-70rem]"
      />
    </section>
  );
}

export default Plans;
