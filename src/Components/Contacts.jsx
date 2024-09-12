import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import PopupWindow from "../UI/PopupWindow";
import LanguageSwitcher from "../UI/LanguageSwitcher";

function Contacts() {
  return (
    <div>
      <ul className="flex gap-10 text-5xl text-slate-400 items-center">
        <li className="hover:text-white duration-500">
          <a href="https://github.com/Grifonek" target="_blank">
            <AiFillGithub />
          </a>
        </li>
        <li className="hover:text-white duration-500">
          <a
            href="https://www.instagram.com/max_demel/?hl=am-et"
            target="_blank"
          >
            <AiOutlineInstagram />
          </a>
        </li>
        <li className="hover:text-white duration-500">
          <PopupWindow popupMessage={<span>max.demel@seznam.cz</span>}>
            {<AiOutlineMail />}
          </PopupWindow>
        </li>
        <li className="text-sm">
          <LanguageSwitcher />
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
