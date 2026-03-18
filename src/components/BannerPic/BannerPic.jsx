import React from "react";
import { MdGrade } from 'react-icons/md';

const BannerPic = ({ img }) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div data-aos="zoom-in" className="h-[400px] w-full" style={bgImage}></div>
  );
};

export default BannerPic;
