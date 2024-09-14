function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-center">
      &copy; Copyright {year}, Max Demel
    </div>
  );
}

export default Footer;
