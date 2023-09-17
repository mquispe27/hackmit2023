import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const GoButton: NextPage = () => {
  const router = useRouter();

  const onGoButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onEllipseClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2.56rem] left-[38.81rem] w-[9rem] h-[9rem] overflow-hidden"
      id="go-button"
      preload
      onClick={onGoButtonClick}
    >
      <div
        className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-firebrick shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[9rem] h-[9rem] cursor-pointer hover:bg-maroon hover:cursor-pointer active:animate-[0.5s_ease-in-out_0s_2_reverse_none_pulsate] active:opacity-[1]"
        onClick={onEllipseClick}
      />
      <img
        className="absolute top-[2.25rem] left-[2.25rem] w-[4.5rem] h-[4.5rem] object-cover hover:cursor-pointer hover:animate-[0.5s_ease-in-out_0s_1_normal_none_jello-horizontal] hover:opacity-[1]"
        alt="GO!"
        loading="eager"
        id="go-button"
        height={72}
        width={56}
        src="/right-arrow@2x.png"
      />
    </button>
  );
};

export default GoButton;
