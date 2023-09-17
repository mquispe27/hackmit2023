import type { NextPage } from "next";
import Profile from "./profile";
import InputForm from "./input-form";
import GoButton from "./go-button";

const InfoBox: NextPage = () => {
  return (
    <section
      className="absolute top-[39.38rem] left-[13.88rem] rounded-794xl bg-darkslategray shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[50.81rem] h-[14.13rem] overflow-hidden text-left text-[2rem] text-white font-manrope"
      id="info-card"
    >
      <Profile />
      <InputForm />
      <GoButton />
    </section>
  );
};

export default InfoBox;
