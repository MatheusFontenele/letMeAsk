import illustrationImg from "../assets/images/illustration.svg";
import logoDarkImg from "../assets/images/LogoDark.svg";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { FormEvent, useState } from "react";
import { get, ref } from "firebase/database";
import { database } from "../services/firebase";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    navigate("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      alert("Informe o codigo da sala");
      return;
    }
    const roomRef = await get(ref(database, "rooms/" + roomCode));

    if (!roomRef.exists()) {
      setShowErrorMessage(true);
      alert("Codigo da sala incorreto ou inexistente, tente novamente");
      return;
    }

    if (roomRef.val().closedAt) {
      alert(
        "A sala ja foi encerrada!! Por favor, crie uma ou entre em outra Sala"
      );
      return;
    }
    navigate(`/rooms/${roomCode}`);
  }

  return (
    <div className=" bg-slate-100 dark:bg-slate-800  md:flex md:flex-row justify-center items-stretch	h-screen">
      <aside className="md:flex-[7] flex justify-center flex-col px-16 py-8 md:py-32 bg-no-repeat	bg-center	 bg-[url(/src/assets/background.svg)] bg-purple-600">
        <div className="mx-auto">
          <img
            src={illustrationImg}
            alt="ilustracao simbolizando perguntas e respostas"
            className="max-w-xs hidden md:block"
          />

          <strong className="font-bold text-white	font-sans text-4xl mt-4">
            Crie salas de Q&A ao-vivo
          </strong>

          <p className="text-2xl	mt-2 text-slate-100	">
            tire duvidas da sua audiencia em tempo real
          </p>
        </div>
      </aside>

      <main className="md:flex-[8] px-8 pt-6 flex justify-center items-center ">
        <div className="flex flex-col w-full max-w-xs items-stretch text-center">
          <img src={logoDarkImg} alt="" className="self-center" />

          <button
            className="gap-2 p-6 w-full mt-10 h-12 rounded-lg bg-white text-blue-600  border-[1px] border-blue-600 
            dark:bg-slate-700 dark:text-white dark:border-0 shadow-md font-medium flex justify-center items-center cursor-pointer text-base hover:brightness-90 transition-[filter] duration-200 "
            onClick={handleCreateRoom}
          >
            <FcGoogle size={30} />
            Crie sua sala com o Google
          </button>

          <div
            className="m-6 before:content-[' '] before:flex-1 before:h-[1px] before:bg-[#a8a8b3] before:mr-4
            after:content-[' '] after:flex-[1] after:h-[1px] after:bg-[#a8a8b3] after:mr-4"
          >
            <span className="text-slate-400">ou entre em uma sala</span>
          </div>

          <form
            className="flex items-stretch flex-col gap-4"
            onSubmit={handleJoinRoom}
          >
            <input
              className="w-full h-12 bg-transparent rounded-lg px-4 border border-slate-300	dark:text-white dark:border-slate-700"
              type="text"
              placeholder="Digite o codigo da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />

            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
