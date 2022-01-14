import { BsArrowLeftCircle } from "react-icons/bs"
import Link from "next/link";

interface INavbar {
  href: string
}

const Navbar = ({ href }: INavbar) => {
  return (
    <div className="py-5 flex items-center">
      <div className=" mr-3">
        <Link href={href} passHref={true}>
          <BsArrowLeftCircle className=" text-violet-300 text-xl" />
        </Link>
      </div>
      <div>
        <h1 className="font-extrabold text-2xl text-violet-700">Quran App</h1>
      </div>
    </div>
  )
}

export default Navbar;