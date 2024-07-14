import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";

function Contacts() {
  return (
    <div>
      <ul className="flex gap-10 text-5xl text-neutral-500">
        <li className="hover:text-white duration-500">
          <AiFillGithub />
        </li>
        <li className="hover:text-white duration-500">
          <AiOutlineInstagram />
        </li>
        <li className="hover:text-white duration-500">
          <AiOutlineMail />
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
