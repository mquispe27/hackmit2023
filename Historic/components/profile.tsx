import type { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <img
      className="absolute top-[2.56rem] left-[1.94rem] rounded-[50%] w-[9.5rem] h-[9.5rem] object-cover"
      alt="profile"
      loading="eager"
      id="profile-picture"
      width={144}
      height={144}
      src="/profile-picture-text-card@2x.png"
    />
  );
};

export default Profile;
