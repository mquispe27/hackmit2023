import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="absolute top-[0rem] left-[0rem] w-[78.94rem] h-[4rem] overflow-hidden">
      <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[18.05rem] h-[4rem]">
        <img
          className="absolute top-[0.67rem] left-[5.67rem] w-[12.38rem] h-[2.67rem]"
          alt="historic"
          loading="eager"
          id="historic-logo"
          height={43}
          width={198}
          src="/historic-logo.svg"
        />
        <img
          className="absolute top-[0rem] left-[0rem] w-[4rem] h-[4rem]"
          alt="icon"
          id="icon"
          src="/icon-historic.svg"
        />
      </div>
      <button
        className="[border:none] p-0 bg-darkslategray absolute top-[0rem] left-[70.94rem] rounded-109xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[8rem] h-[4rem]"
        disabled={true}
      >
        <img
          className="absolute top-[1.19rem] left-[4.75rem] w-[1.63rem] h-[1.63rem] object-cover"
          loading="eager"
          id="dropdown"
          alt=""
          src="/dropdownarrowiconrounded-1@2x.png"
        />
        <img
          className="absolute top-[0.88rem] left-[1.63rem] w-[2.25rem] h-[2.25rem] object-cover"
          alt=""
          src="/551953-1@2x.png"
        />
      </button>
    </div>
  );
};

export default Header;
