const About = () => {
  return (
    <div
      id="about"
      className="wrapper mt-20 sm:mt-[120px] md:mt-[150px] lg:mt-[250px] "
    >
      <div className="contain relative justify-center items-center ">
        {/* <img
          src="/dog.png"
          className="absolute md:block hidden -z-10 max-w-full left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
          alt=""
        /> */}
        <div className="w-full max-w-[1350px] isolate  relative ">
          <span className="-z-10 inline-block absolute  rounded-[30px] -inset-[3px] bg-borderGr"></span>
          <div className="bg-[#261C2D] rounded-[30px]  py-8 flex justify-start items-center flex-col ">
            <h2 className="text-[24px] sm:text-[40px] lg:text-[50px] 2xl:text-[64px] font-bold text-white text-center pb-8 relative w-full">
              WHATS IT ALL ABOUT?
              <span className="w-full inline-block absolute bottom-0 left-0 bg-borderGr h-0.5"></span>
            </h2>
            <p className="text-white font-semibold text-base leading-[1.7] sm:leading-normal sm:text-xl lg:text-[26px] 2xl:text-[32px] px-6 sm:text-left  text-center md:px-[50px] xl:px-[100px] pt-5 sm:pt-8">
              Born from the genius thrifty brainwaves of our dear Scrooge
              McDuck, $CROOGE is a meme coin that doesn't just quack - it cashes
              out! Every coin transaction you duck dive into hoards some shiny
              BNB fees straight into Scrooge's ever-expanding Money Bin. Our
              unique 'Duckonomics' creates a wealth pond that keeps brimming,
              rewards the HODLing hoarders, and puts a full-stop to those
              dreaded, featherless nests (yeah, we mean bagholders)!
            </p>
            <button className="bg-goldBtn  mt-5 sm:mb-3 px-[20px] leading-[1] h-[60px] rounded-lg border-2 border-solid border-goldBtn transition-all duration-300 hover:bg-transparent hover:text-goldBtn text-black uppercase flex justify-center items-center gap-2 text-base 2xl:text-xl font-bold">
              Learn more{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
