import { Check } from "lucide-react";
import ImgPessoa1 from "../assets/pessoa-1.png";
import ImgPessoa2 from "../assets/pessoa-2.png";

function Features() {
  return (
    <section className="flex justify-center items-center bg-white mt-[2rem]">
      <div className="flex flex-col items-center justify-center w-[85%]">
        <div className="flex flex-col items-center justify-center">
          <img src={ImgPessoa1} alt="" className="w-[292px] h-[362px]" />

          <h2 className="text-[27px] font-[700] text-black mt-[1rem]">
            Para Quem é o TipMiner:
          </h2>

          <div className="flex flex-col mt-[1rem]">
            <div className="flex flex-row gap-x-[1rem]">
              <Check className="text-[#02C1E3]" />
              <p className="text-[13.5px] font-[500]">
                Para quem busca ter uma renda extra, com <br />
                menos esforço e mais assertividade
              </p>
            </div>

            <div className="flex flex-row gap-x-[1rem]">
              <Check className="text-[#02C1E3]" />
              <p className="text-[13.5px] font-[500] text-start">
                Para Jogadores Casuais que desejam <br />
                aumentar seus lucros sem precisar gastar <br />
                horas em análise e pesquisa.
              </p>
            </div>

            <div className="flex flex-row gap-x-[1rem]">
              <Check className="text-[#02C1E3]" />
              <p className="text-[13.5px] font-[500]">
                Para Apostadores Profissionais que <br />
                buscam uma vantagem competitiva e <br />
                ferramentas para refinar suas estratégias <br />
                com análises e dados precisos.
              </p>
            </div>
          </div>

          <div>
            <img src="" alt="" />

            <div>
              <h2></h2>

              <div>
                <div>
                  <img src="" alt="" />
                  <p></p>
                </div>

                <div>
                  <img src="" alt="" />
                  <p></p>
                </div>

                <div>
                  <img src="" alt="" />
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
