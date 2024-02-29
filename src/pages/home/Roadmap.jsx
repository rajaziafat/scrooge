const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="wrapper pb-[120px] relative isolate mt-[80px] md:mt-[160px] xl:mt-[200px]"
    >
      <div className="w-full max-w-[550px] rounded-full aspect-square bg-[#211f49] blur-[300px] absolute top-[5%] right-0 -z-10"></div>
      <div className="w-full max-w-[550px] rounded-full aspect-square bg-[#2F2038] blur-[300px] absolute bottom-[5%] left-0"></div>
      <div className="contain flex-col justify-start items-center gap-8 md:gap-14">
        <h2 className="text-[24px] sm:text-[40px] lg:text-[50px] 2xl:text-[64px] font-bold text-orange text-center ">
          QUACKERS ROAD MAP
        </h2>
        <div className="grid mt-2 sm:mt-10 relative grid-cols-1 sm:grid-cols-[auto__1fr] xl:grid-cols-[1fr__auto__1fr] items-center w-full isolate xl:gap-0 gap-4 sm:gap-10">
          <div className="top-[8%] sm:block hidden bg-borderGr left-[75px] lg:left-[150px] xl:left-1/2 h-[78%] lg:h-[76%] -translate-x-1/2 w-[2px] absolute -z-10"></div>
          <div className="col-start-1 sm:col-start-2 xl:col-start-auto col-span-1 w-full flex justify-center items-center">
            <RoadBox
              classes="xl:justify-self-start"
              title="QUACK OFF"
              desc="In this inaugural phase, we hatch the egg! The $CROOGE token is launched, the website is live, and our social media platforms are quacking about all things $CROOGE!"
            />
            <img
              src="/arrow-left.png"
              className="w-full max-w-[100px] 2xl:max-w-[136px] xl:block hidden object-contain "
              alt=""
            />
          </div>
          <RoadCenter
            classes=" row-start-1 xl:row-start-auto col-start-1 col-span-1 xl:col-start-auto"
            title="1"
          />
          <div className="xl:block hidden w-full"></div>
          <div className="xl:block hidden w-full"></div>
          <RoadCenter
            classes="col-start-1 col-span-1 xl:col-start-auto"
            title="2"
          />
          <div className="col-start-1 sm:col-start-2 xl:col-start-auto col-span-1 flex justify-center items-center w-full">
            <img
              src="/arrow-right.png"
              className="w-full max-w-[100px] 2xl:max-w-[136px] xl:block hidden object-contain "
              alt=""
            />
            <RoadBox
              classes="xl:justify-self-end"
              title="Operation Duck Moon"
              desc="Next, we aim for the stars, or rather, the moon! We'll get $CROOGE listed on major exchanges and initiate massive marketing campaigns. It's all systems go as we skyrocket the $CROOGE name across the galaxy!"
            />
          </div>
          <div className="col-start-1 sm:col-start-2 xl:col-start-auto col-span-1 flex justify-center items-center w-full">
            <RoadBox
              classes="xl:justify-self-start"
              title="McDuck Metropolis"
              desc="Time to establish a Duckberg on the Blockchain! Here, we'll develop and launch the $CROOGE DApp, complete with a 'McDuck Marketplace' for NFT trading. This is when we truly take over the crypto world with our McDuckian magic!"
            />
            <img
              src="/arrow-left.png"
              className="w-full max-w-[100px] 2xl:max-w-[136px] xl:block hidden object-contain "
              alt=""
            />
          </div>
          <RoadCenter
            classes="row-start-4 xl:row-start-auto col-start-1 col-span-1 xl:col-start-auto"
            title="3"
          />
          <div className="xl:block hidden w-full"></div>
          <div className="xl:block hidden w-full"></div>
          <RoadCenter
            classes="col-start-1 col-span-1 xl:col-start-auto"
            title="4"
          />
          <div className="col-start-1 sm:col-start-2 xl:col-start-auto col-span-1 flex justify-center items-center w-full">
            <img
              src="/arrow-right.png"
              className="w-full max-w-[100px] 2xl:max-w-[136px] xl:block hidden object-contain "
              alt=""
            />
            <RoadBox
              classes="xl:justify-self-end"
              title="Planet McDuck"
              desc="Our final phase? World Dominance! At this stage, $CROOGE becomes a global currency. It's adopted worldwide for trading, transactions, and tipping generously at all-you-can-eat worm buffets. World, meet your new currency overlord - $CROOGE!
            Welcome aboard the $CROOGE rollercoaster - next stop, world dominance! Hop on, hold tight, and HODL!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

const RoadBox = ({ title, desc, classes }) => {
  return (
    <div className={`${classes} relative w-full max-w-[520px]`}>
      {/* <div className=" absolute  border-2 border-solid border-white roadmapBorder -inset-4 rounded-[17px] -z-10"></div> */}
      <div className="bg-[#27212A] border-2 border-dashed border-[#FC1B5E] flex justify-start items-start flex-col w-full py-9 px-5 rounded-[17px]">
        <h4 className="text-white w-full text-center text-xl md:text-2xl 2xl:text-[32px] font-semibold pb-8 border-b border-solid border-[#3D3342] uppercase">
          {title}
        </h4>
        <p className="text-white text-base md:text-lg 2xl:text-xl uppercase font-semibold mt-5">
          {desc}
        </p>
      </div>
    </div>
  );
};

const RoadCenter = ({ title, classes }) => {
  return (
    <div
      className={`${classes} w-[150px] lg:w-[300px] border-2 border-dashed border-[#fc1b5e] bg-[#27212a] rounded-lg hidden sm:flex justify-center uppercase relative items-center h-14 lg:h-20 text-goldBtn text-base lg:text-[32px] font-semibold`}
    >
      Stage {title}
    </div>
  );
};
