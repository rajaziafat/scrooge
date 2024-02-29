const Hero = () => {
  return (
    <div
      id="home"
      className="bg-dark relative shadow-hero rounded-bl-[10vw] pb-[40px] pt-[160px] md:py-[160px] rounded-br-[10vw] wrapper md:h-screen min-h-[800px] isolate"
    >
      <div className="w-full max-w-[519px] rounded-full aspect-square bg-[#162E9C] blur-[300px] absolute bottom-0 -z-10 right-0"></div>
      <div className="contain isolate relative h-full justify-center items-center text-center sm:text-left sm:items-start flex-col gap-5">
        <h2 className="text-[30px] uppercase sm:text-[40px] lg:text-[50px] xl:text-[65px] 2xl:text-[77px] leading-[1.2] font-bold text-white mix-blend-difference">
          earn INTEREST WITH YOUR <br className="sm:block hidden" />{" "}
          <span className="text-orange">$CROOGE mCDUCK</span>{" "}
        </h2>
        <p className="text-white font-bold text-lg sm:text-2xl xl:text-[35px]">
          Your ticket to a gold-plated future
        </p>
        <button className="bg-goldBtn shadow-btn mt-4 sm:mt-20 px-[20px] leading-[1] h-[60px] rounded-lg border-2 border-solid border-goldBtn transition-all duration-300 hover:bg-transparent hover:text-goldBtn text-black uppercase text-base 2xl:text-xl font-bold">
          GRAB YOUR TOKEN
        </button>
        <img
          src="/hero.png"
          className="static md:absolute right-0 top-[0px] max-w-[500px] md:max-w-none self-center w-[80%] md:w-auto md:h-[80vh] md:min-h-[600px] -z-10 object-contain"
          alt=""
        />
        <img
          src="/hero-coin.png"
          className="absolute bottom-[0%] lg:block hidden max-w-[150px] 2xl:max-w-[200px] right-[40%] 2xl:right-[30%] -z-10"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
