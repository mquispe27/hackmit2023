import type { NextPage } from "next";

const InputForm: NextPage = () => {
  return (
    <div className="absolute top-[0rem] left-[14.44rem] w-[23.38rem] h-[14.13rem] overflow-hidden text-left text-[2rem] text-white font-manrope">
      <div className="absolute top-[2.88rem] left-[0rem] w-[23.38rem] h-[11.25rem]">
        <div className="absolute top-[0rem] left-[0rem] whitespace-pre-wrap inline-block w-[23.38rem] h-[11.25rem]">
          <p className="m-0">{`Talk with `}</p>
          <p className="m-0">in<br/>about</p>
        </div>
        <input
          className="[border:none] bg-firebrick absolute top-[6rem] left-[0rem] rounded-18xl w-[21.63rem] h-[2.31rem] cursor-text text-[white] pl-[1rem] text-[1.35rem]"
          name="topic"
          id="topic"
          value="his favorite food"
          placeholder=""
          type="text"
        />
        <input
          className="[border:none] bg-firebrick absolute top-[3rem] left-[2.5rem] rounded-18xl w-[11.38rem] h-[2.31rem] cursor-text text-[white] pl-[1rem] text-[1.35rem]"
          name="language"
          id="language"
          value="Spanish"
          placeholder=""
          type="text"
        />
        <input
          className="[border:none] bg-firebrick absolute top-[0rem] left-[8.88rem] rounded-18xl w-[12.75rem] h-[2.31rem] cursor-text text-[white] pl-[1rem] text-[1.35rem]"
          name="person"
          id="person"
          value="Pablo Picasso"
          placeholder=""
          type="text"
        />
      </div>
    </div>
  );
};

export default InputForm;
