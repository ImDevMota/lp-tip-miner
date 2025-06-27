import { Check, X } from "lucide-react";
import ImgPessoa1 from "../assets/pessoa-1.png";
import ImgPessoa2 from "../assets/pessoa-2.png";

function Features() {
  return (
    <section className="flex justify-center items-center bg-white mt-[2rem]">
      <div className="flex flex-col items-center justify-center w-[85%] sm:w-[70%] mt-[2.5rem]">
        <div className="flex flex-col sm:flex-row sm:w-[80%] sm:justify-between items-center sm:items-start">
          <div className="relative w-fit sm:order-2 rounded-lg overflow-hidden">
            <img
              src={ImgPessoa1}
              alt=""
              className="w-[292px] h-[362px] sm:w-[414px] sm:h-[514px] drop-shadow-[0_20px_15px_rgba(0,0,0,0.1)]"
            />
          </div>

          <div className="flex flex-col ml-[0.3rem] gap-y-4 mt-[2rem]">
            <h2 className="text-[27px] sm:text-[48px] font-[700] text-black ">
              Para Quem é o TipMiner:
            </h2>
            <div className="flex flex-row gap-x-[1rem] sm:gap-x-[2rem] sm:mt-[1.5rem] items-center">
              <Check className="text-[#02C1E3] sm:size-[32px]" />
              <p className="text-[14.5px] sm:text-[24px] font-[500] ">
                Para quem busca ter uma renda extra, com <br />
                menos esforço e mais assertividade
              </p>
            </div>

            <div className="flex flex-row gap-x-[1rem] sm:gap-x-[2rem] items-center">
              <Check className="text-[#02C1E3] sm:size-[32px]" />
              <p className="text-[14.5px] sm:text-[24px] font-[500]  text-start">
                Para Jogadores Casuais que desejam <br />
                aumentar seus lucros sem precisar gastar <br />
                horas em análise e pesquisa.
              </p>
            </div>

            <div className="flex flex-row gap-x-[1rem] sm:gap-x-[2rem] items-center">
              <Check className="text-[#02C1E3] sm:size-[32px]" />
              <p className="text-[14.5px] sm:text-[24px] font-[500] ">
                Para Apostadores Profissionais que <br />
                buscam uma vantagem competitiva e <br />
                ferramentas para refinar suas estratégias <br />
                com análises e dados precisos.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mb-[2rem] sm:w-[80%] sm:mb-[6rem] sm:justify-between items-center sm:mt-[5.5rem] mt-[4.5rem]">
          <div className="">
            <img
              src={ImgPessoa2}
              alt=""
              className="w-[292px] h-[362px] sm:w-[414px] sm:h-[514px] rounded-[0.6rem]"
            />
          </div>

          <div className="flex flex-col ml-[0.3rem] gap-y-5 mt-[2rem]">
            <h2 className="text-[24.5px] sm:text-[48px] font-[700] text-black ">
              Pra quem não é o TipMiner:
            </h2>

            <div className="flex flex-row gap-x-[1rem] sm:gap-x-[2rem] sm:mt-[1.5rem] items-center">
              <X className="text-[#FF0000] sm:size-[32px]" />
              <p className="text-[14.5px] font-[500] sm:text-[24px] ">
                Para quem Prefere confiar apenas na <br />
                sorte.
              </p>
            </div>

            <div className="flex flex-row gap-x-[1rem] sm:gap-x-[2rem] items-center">
              <X className="text-[#FF0000] sm:size-[32px]" />
              <p className="text-[14.5px] font-[500] sm:text-[24px]  text-start">
                Para quem Joga sem estratégia definida e <br />
                não busca ferramentas aliadas.
              </p>
            </div>

            <div className="flex flex-row gap-x-[1rem] sm:gap-x-[2rem] items-center">
              <X className="text-[#FF0000] sm:size-[32px]" />
              <p className="text-[14.5px] font-[500] sm:text-[24px] ">
                Para quem Não tem responsabilidade com <br />
                dinheiro e joga sem consciência.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
