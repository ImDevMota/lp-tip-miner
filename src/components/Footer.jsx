import Logo from "../assets/logo-tip-miner.svg";

function Footer() {
  return (
    <footer className="flex justify-center items-center border-t-[0.12rem] border-white bg-[#A1A1A10D]">
      <div className="flex flex-col sm:justify-between sm:flex-row sm:w-[65%] w-[85%] justify-center sm:items-start items-center mt-[3.5rem] sm:mb-[5.5rem]">
        <img
          src={Logo}
          alt=""
          className="w-[6.5rem] sm:w-[130px] sm:h-[60px] sm:mt-[2.4rem]"
        />

        <p className="text-white text-[20px] font-[600] text-center sm:text-start mt-[2.7rem]">
          © 2024 - Todos os direitos reservados.{" "}
          <br className="sm:block hidden" />
          <span className="font-[400]">Tipminer</span>
        </p>

        <div className="flex flex-col mt-[2.5rem] sm:text-start">
          <p className="text-white text-[20px] font-[600] text-center sm:text-start">
            Precisa de ajuda?
          </p>
          <a
            href="#"
            className="text-[#CDCDCD] text-[16px] font-[400] text-center sm:text-start"
          >
            Termos de uso
          </a>
          <a
            href="#"
            className="text-[#CDCDCD] text-[16px] font-[400] text-center sm:text-start"
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
