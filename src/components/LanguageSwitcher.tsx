import { GrLanguage } from "react-icons/gr";
import { Link } from "@/navigation";

export default function LangSwitch() {
    return (
        <div className="dropdown bg-black">
            <div tabIndex={0} role="button" className="btn m-1 bg-black border-hidden"><GrLanguage size={15} /></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 rounded-box w-20">
                <Link href="/" locale="pl">PL</Link>
                <Link href="/" locale="en">ENG</Link>
                <Link href="/" locale="de">DE</Link>
            </ul>
        </div>
    )
}
