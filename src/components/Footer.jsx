import Logo from "../assets/logo-tip-miner.svg";

function Footer() {
  return (
    <footer className="flex justify-center items-center border-t-[0.12rem] border-white bg-[#A1A1A10D]">
      <div className="flex flex-col w-[85%] justify-center items-center mt-[3.5rem]">
        <img src={Logo} alt="" className="w-[6.5rem]" />

        <p className="text-white text-[20px] font-[600] text-center mt-[2.7rem]">
          © 2024 - Todos os direitos reservados.{" "}
          <span className="font-[400]">Tipminer</span>
        </p>

        <div className="flex flex-col mt-[2.5rem]">
          <p className="text-white text-[20px] font-[600] text-center">
            Precisa de ajuda?
          </p>
          <a
            href="#"
            className="text-[#CDCDCD] text-[16px] font-[400] text-center"
          >
            Termos de uso
          </a>
          <a
            href="#"
            className="text-[#CDCDCD] text-[16px] font-[400] text-center"
          >
            Política de privacidade
          </a>
        </div>

        <p className="text-[#CDCDCD] text-[16px] font-[400] text-center py-[3rem]">
          Design por Kevin Designer · Desenvolvido por Thiago Mota
        </p>
      </div>
    </footer>
  );
}

export default Footer;
