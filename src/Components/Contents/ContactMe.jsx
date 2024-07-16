function ContactMe() {
  return (
    <div id="contact" className="flex flex-col items-center">
      <div className="mb-4">
        <h4 className="text-2xl font-semibold uppercase">
          Ready to build something amazing?
        </h4>
      </div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-bg-main rounded-md group-hover:bg-opacity-0 font-semibold">
          <a href="mailto:max.demel@seznam.cz">
            Let&apos;s get to know each other!
          </a>
        </span>
      </button>
    </div>
  );
}

export default ContactMe;
