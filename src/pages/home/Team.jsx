const Team = () => {
  return (
    <div id="team" className="wrapper mt-[80px] md:mt-[200px] lg:mt-[250px]">
      <div className="contain flex-col justify-start items-center gap-8 md:gap-14">
        <div className="text-center">
          <h2 className="text-[24px] sm:text-[40px] lg:text-[50px] 2xl:text-[64px] font-bold text-orange text-center uppercase">
            Team Selection
          </h2>
          <p className="mt-4 text-white font-bold text-lg md:text-3xl">
            The Duck Squad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center 2xl:grid-cols-4 mt-2 md:mt-8 w-full gap-10 md:gap-6">
          <TeamBox
            img="/team1.png"
            name="HUEY MCDUCK"
            role="TECH GURU"
            desc="Rocking the red cap and tech-stack, Huey ensures $CROOGE's machinery hums like a finely tuned engine!"
          />
          <TeamBox
            img="/team2.png"
            name="Dewey McDuck"
            role="Marketing Maverick"
            desc="Our blue-capped dynamo, Dewey, knows how to make $CROOGE the talk of the town!"
          />
          <TeamBox
            img="/team3.png"
            name="Louie McDuck"
            role="Finance Whizz"
            desc="Louie, our green-capped number cruncher, guards every $CROOGE coin like it's his last"
          />
          <TeamBox
            img="/team4.png"
            name="Donald Duck"
            role="Operations Overlord"
            desc="Donning the sailor suit and his trademark quack, Donald keeps the Duck Squad sailing smooth!"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;

const TeamBox = ({ img, name, role, desc }) => {
  return (
    <div className="w-full relative teamBorder max-w-[390px] h-full">
      {/* <div className="bg-teamBorder -inset-0.5 rounded-[50px] absolute -z-10"></div> */}
      <div className="flex justify-start items-center gap-3 w-full  p-2 pb-10 rounded-[30px] shadow-team bg-teamGr h-full flex-col text-center ">
        <div className="grid place-items-center w-full h-[326px] bg-[#111] rounded-[30px]">
          <img
            src={img}
            className="max-w-[60%] sm:max-w-full object-contain"
            alt=""
          />
        </div>
        <h3 className="text-white uppercase text-[26px] 2xl:text-[32px] pt-2 font-bold">
          {name}
        </h3>
        <div className="flex justify-start items-center flex-col gap-3 border-t border-solid border-[#949097] pt-3">
          <h5 className="text-goldBtn uppercase text-lg 2xl:text-xl font-extrabold">
            {role}
          </h5>
          <p className="text-white px-3 text-base 2xl:text-xl uppercase font-semibold leading-[1.75]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};
