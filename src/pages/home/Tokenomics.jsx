const Tokenomics = () => {
  return (
    <div className="wrapper relative isolate mt-[80px] md:mt-[200px] ">
      <div className="w-full max-w-[370px] rounded-full aspect-square bg-[#162E9C] blur-[300px] absolute bottom-0 -z-10 translate-x-1/2 right-0 translate-y-1/2"></div>
      <div className="w-full max-w-[370px] rounded-full aspect-square bg-[#162E9C] blur-[300px] absolute top-full -z-10 -translate-x-1/2 left-0 "></div>
      <div className="contain flex-col justify-start items-center gap-8 md:gap-14">
        <h2 className="text-[24px] sm:text-[40px] lg:text-[50px] 2xl:text-[64px] font-bold text-orange text-center ">
          DUCKONOMICS
        </h2>
        <img
          src="/rec.png"
          className="w-full max-w-full md:block hidden object-cover bottom-0 left-1/2 -translate-x-1/2  absolute -z-10"
          alt=""
        />
        <div className="xl:flex-row flex-col mt-5 flex justify-between items-center xl:items-start  w-full xl:gap-10 gap-14 ">
          <TokenBox
            img="/token1.png"
            title="$CROOGE Supply"
            desc="Our initial supply is 1,000,000,000,000 $CROOGE tokens - an ocean of coins for every Scrooge wannabe!"
            classes=""
          />
          <TokenBox
            img="/token2.png"
            title="5% BNB Back Into The Money Bin"
            desc="Every $CROOGE transaction is taxed at 5%. This isn't your typical tax though - we convert it into BNB and stash it away in our community's Money Bin. More transactions = bigger Bin!"
            classes="xl:mt-10"
          />
          <TokenBox
            img="/token3.png"
            title="$HODLing Incentive: The McDuck Way"
            desc="Our initial supply is 1,000,000,000,000 $CROOGE tokens - an ocean of coins for every Scrooge wannabe!"
            classes="xl:mt-20"
          />
        </div>
        <div className="xl:flex-row flex-col flex justify-start xl:mt-0 mt-14 items-center xl:items-start  w-full gap-14 xl:gap-20 ">
          <TokenBox
            img="/token4.png"
            title="Burn and Claim: Dive Into The Gold"
            desc="Fancy a dip in the Money Bin? Burn your tokens and claim a share! If you burn X% of the total supply, you get (X/2)% of the Bin. More burns, more gold to dive in!"
            classes="2xl:-mt-10"
          />
          <TokenBox
            img="/token5.png"
            title="No More Empty Nests: No Bagholders Allowed"
            desc="Our unique 'Duckonomics' ensures a rising price floor for $CROOGE. The more you wait to burn and claim, the more BNB you get per token. Say goodbye to bagholding, and hello to feathered nests! 
            With $CROOGE, every duck has its day, and every day is a gold day!"
            classes="xl:mt-10 2xl:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

const TokenBox = ({ img, title, desc, classes }) => {
  return (
    <div
      className={`${classes} xl:min-h-[510px] h-full  relative max-w-[480px] w-full isolate`}
    >
      <div className="w-full  h-full absolute isolate -z-10 -top-2 md:-top-4 -left-2 md:-left-4">
        <div className="bg-borderGr rounded-[14px] -z-10 absolute -inset-[1px]"></div>
        <div className="w-full h-full bg-[#27212a] rounded-[14px]"> </div>
      </div>
      <div className="w-full h-full  relative isolate">
        <div className="bg-borderGr rounded-[14px] -z-10 absolute -inset-[1px]"></div>
        <div className="flex justify-start  xl:min-h-[510px] pb-7 items-start flex-col p-5 w-full h-full bg-[#27212a] rounded-[14px]">
          <img src={img} className="w-[100px] object-contain" alt="" />
          <h4 className="text-white uppercase mt-4 font-bold text-xl md:text-[28px]">
            {title}
          </h4>
          <p className="text-white uppercase mt-4 leading-[1.75] text-base md:text-xl font-semibold">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
