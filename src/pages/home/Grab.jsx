import { Tilt } from "react-tilt";

const Grab = () => {
  return (
    <div id="token" className="wrapper mt-[80px] md:mt-[200px] ">
      <div className="contain flex-col justify-start items-center gap-8 md:gap-14">
        <h2 className="text-[24px] sm:text-[40px] lg:text-[50px] 2xl:text-[64px] font-bold text-orange text-center ">
          GRAB YOUR TOKEN (HATCHING SOON)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center gap-y-10 gap-x-5 w-full">
          <GrabBox
            bg="/grabBg1.png"
            ico="/grab1.png"
            title="The McDuck Bank Vault"
            desc="In the spirit of Scrooge's passion for multiplying his moolah, every
        $CROOGE transaction ducks away a neat 5% right into our community's
        beak-bloated Money Bin. Who wouldn't want to contribute to a pile of
        gold that could make Midas blush?"
          />
          <GrabBox
            bg="/grabBg2.png"
            ico="/grab2.png"
            title="The McDuck 'Hodl till it Hurts' Rule"
            desc="Scrooge wasn't big on splurging, and neither are we! To keep the nest eggs nice and toasty, we slam a double fee on sales made within 100K blocks of buying. Now isn't that a quacking incentive to HODL onto your $CROOGE?"
            classes="md:pt-8"
          />
          <GrabBox
            classes="md:pl-8"
            bg="/grabBg3.png"
            ico="/grab3.png"
            title="The McDuck 'Scorch for Score' Plan"
            desc="Ever fancied taking a nose dive into a mountain of gold coins? Now you can! Torch your tokens to score a slice of the Money Bin! By burning X% of the circulating supply, you're eligible for a (X/2)% share of the Money Bin. It's like each token is a magical feather, leading you to a treasure!"
          />
          <GrabBox
            bg="/grabBg4.png"
            ico="/grab4.png"
            title="Duck Off, Empty Nests! (Bagholders, Begone!)"
            desc="Our innovative Burn and Claim 'Duckonomics' guarantee a rising price floor for $CROOGE that ascends just like Scrooge's net worth. The longer you play the waiting game to burn and claim, the more BNB per token you're bound to pocket. It's an absolute quackery of wealth multiplication!"
          />
        </div>
      </div>
    </div>
  );
};

export default Grab;

const GrabBox = ({ bg, title, ico, desc, classes }) => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 30, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 2000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <Tilt options={defaultOptions}>
      <div
        className={`relative max-w-[390px] min-h-[530px] isolate  flex-col  w-full flex justify-start  items-start p-6  border border-solid border-white  bg-grab1 rounded-[30px]  ${classes}`}
      >
        <img src={ico} className="w-[100px] object-contain mb-3" alt="" />
        <h4 className="text-xl font-extrabold text-white">{title}</h4>
        <p className="text-base font-semibold text-white mt-4">{desc}</p>
      </div>
    </Tilt>
  );
};
