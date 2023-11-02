import React from "react";
import imgRoadTrip from "../assets/img/section1.jpg";

function Section2() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="left row-start-2 row-end-3">
        <img
          src={imgRoadTrip}
          className="w-full
        "
          alt="imgRoadTrip"
        />
      </div>
      <div className="right p-[5rem] flex justify-center item-center row-start-1 row-end-2 lg:row-start-2 lg:row-end-3">
        <div>
          <h3 className="text-5xl">Transform your</h3>
          <p className="text-gray-500 my-[2rem]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            sit ut earum saepe alias, dignissimos enim ipsa at expedita ex
            distinctio et, quo labore facilis?
          </p>
          <a href="#" className="border-b-2 border-b-yellow-600">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Section2;
