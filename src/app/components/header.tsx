import Image from "next/image";
import PlayIcon from "../images/MFA-PLAY.svg";

export default function Header() {
  return (
    <header className="px-24 py-2">
      <div className="flex px-10">
        <Image src={PlayIcon} width={50} height={50} alt="A red triangle" />
        <h1 className="text-6xl font-bold px-5">MFA Play</h1>
      </div>
      <hr className="m-5 border-slate-950" />
    </header>
  );
}
