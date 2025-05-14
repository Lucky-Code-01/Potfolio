function Footer() {
  return (
    <div className="w-full py-4 px-4 mt-6 bg-[#0A0F2C] text-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:justify-center">
        <h1 className="text-base sm:text-lg font-semibold">
          &copy; 2025 All Rights Reserved
        </h1>
        <h1 className="text-base sm:text-lg font-semibold">
          Made by <span className="text-emerald-400">Laxman Baisoya</span>
        </h1>
      </div>
    </div>
  );
}

export default Footer;
