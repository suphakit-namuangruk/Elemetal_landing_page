import React from "react";
import imgRoadTrip from "../../assets/img/airplane.jpg";

function Section1() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="left p-[5rem] flex justify-center item-center">
        <div>
          <h3 className="text-5xl">Search location</h3>
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
      <div className="right">
        <img
          src={imgRoadTrip}
          className="w-full
        "
          alt="imgRoadTrip"
        />
      </div>
    </div>
  );
}

export default Section1;
