import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  return (
    <header className="wrapper  fixed z-[50] top-5 left-0">
      {headerToggle && (
        <div
          onClick={() => setHeaderToggle(false)}
          className="w-full h-full z-[90] bg-black opacity-60 top-0 left-0 lg:hidden block fixed"
        ></div>
      )}
      <div className="contain shadow-2xl justify-between items-center gap-2 px-5 rounded-xl bg-darkBlue h-[90px] lg:h-[120px] ">
        <div className="flex justify-start items-center gap-3">
          <img
            src="/logo.png"
            className="object-contain w-16 xl:w-[80px]"
            alt=""
          />
          <h4 className="text-orange text-2xl xl:text-[32px] font-bold">
            $CROOGE
          </h4>
        </div>
        <nav
          className={`lg:flex-row flex-col fixed lg:static top-0 ${
            headerToggle ? "right-0" : "-right-full"
          } flex justify-start sm:items-start items-center lg:justify-center lg:items-center gap-5 2xl:gap-8 z-[91] w-full h-full sm:max-w-[450px] bg-dark px-[3rem] pt-[6rem] pb-[3rem] overflow-y-auto lg:overflow-visible lg:w-auto lg:h-auto lg:max-w-none lg:bg-transparent lg:p-0 transition-all duration-700`}
        >
          <Link
            smooth
            to="home"
            spy
            offset={-120}
            activeStyle={{ color: "#EBB707" }}
            onClick={() => setHeaderToggle(false)}
            className="text-white text-base 2xl:text-xl font-semibold uppercase cursor-pointer"
          >
            Home
          </Link>
          <Link
            smooth
            to="about"
            spy
            offset={-120}
            activeStyle={{ color: "#EBB707" }}
            onClick={() => setHeaderToggle(false)}
            className="text-white text-base 2xl:text-xl font-semibold uppercase cursor-pointer"
          >
            about
          </Link>
          <Link
            smooth
            to="token"
            spy
            offset={-120}
            activeStyle={{ color: "#EBB707" }}
            onClick={() => setHeaderToggle(false)}
            className="text-white text-base 2xl:text-xl font-semibold uppercase cursor-pointer"
          >
            Your token
          </Link>
          <Link
            smooth
            to="team"
            spy
            offset={-120}
            activeStyle={{ color: "#EBB707" }}
            onClick={() => setHeaderToggle(false)}
            className="text-white text-base 2xl:text-xl font-semibold uppercase cursor-pointer"
          >
            Team
          </Link>
          <Link
            smooth
            to="roadmap"
            spy
            offset={-120}
            activeStyle={{ color: "#EBB707" }}
            onClick={() => setHeaderToggle(false)}
            className="text-white text-base 2xl:text-xl font-semibold uppercase cursor-pointer"
          >
            Roadmap
          </Link>
          <button className="bg-goldBtn 2xl:ml-6 px-[20px] leading-[1] h-[50px] 2xl:h-[60px] rounded-lg border-2 border-solid border-goldBtn transition-all duration-300 hover:bg-transparent hover:text-goldBtn text-black uppercase text-base 2xl:text-xl font-bold">
            Register Now
          </button>
        </nav>
        <button
          onClick={() => setHeaderToggle((prev) => !prev)}
          className="relative z-[92] text-white lg:hidden block "
        >
          {headerToggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
