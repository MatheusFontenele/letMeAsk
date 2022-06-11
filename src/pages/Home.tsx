import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import logoDarkImg from "../assets/images/LogoDark.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import Button from "../components/Button";

export function Home() {
  return (
    <div className="dark:bg-slate-800	text-slate-500 md:flex md:flex-row justify-center items-stretch	h-screen">
      <aside className="md:flex-[7] flex justify-center flex-col px-16 py-8 md:py-32 bg-no-repeat	bg-center	 bg-[url(/src/assets/background.svg)] bg-purple-600">
        <div className="mx-auto">
          <img
            src={illustrationImg}
            alt="ilustracao simbolizando perguntas e respostas"
            className="max-w-xs hidden md:block"
          />

          <strong className="font-bold dark:text-white	font-sans text-4xl mt-4">
            Crie salas de Q&A ao-vivo
          </strong>

          <p className="text-2xl	mt-2 dark:text-slate-100	">
            tire duvidas da sua audiencia em tempo real
          </p>
        </div>
      </aside>

      <main className="md:flex-[8] px-8 pt-6 flex justify-center items-center ">
        <div className="flex flex-col w-full max-w-xs items-stretch text-center">
          <img src={logoDarkImg} alt="" className="self-center" />

          <button className=" gap-2 p-6 w-full mt-10 h-12 rounded-lg bg-red-600 dark:text-white flex justify-center items-center cursor-pointer border-0 text-base hover:brightness-90 transition-[filter] duration-200	">
            <img src={googleIconImg} alt="" />
            Crie sua sala com o Google
          </button>

          <div
            className="m-6 before:content-[' '] before:flex-1 before:h-[1px] before:bg-[#a8a8b3] before:mr-4
              after:content-[' '] after:flex-[1] after:h-[1px] after:bg-[#a8a8b3] after:mr-4"
          >
            <span>ou entre em uma sala</span>
          </div>

          <form action="">
            <input
              className="w-full h-12 bg-transparent rounded-lg px-4 border border-slate-700	"
              type="text"
              placeholder="Digite o codigo da sala"
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
