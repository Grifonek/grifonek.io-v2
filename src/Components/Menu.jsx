function Menu() {
  return (
    <div>
      <ul className="space-y-3 py-6 font-medium">
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a href="#">ABOUT</a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a href="#">PROJECTS</a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a href="#">EXPERIENCE</a>
        </li>
        <li className="transition-all duration-100 ease-in-out hover:font-extrabold cursor-pointer w-fit">
          <a href="#">CONTACT ME</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
