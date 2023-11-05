import React from "react";

function Section3() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-[650px]">
      <div className="left flex justify-center items-end p-[2rem] lg:px-[15rem] lg:pb-[5rem] text-center bg-mountain bg-cover">
        <div className="text-white">
          <h3 className="text-3xl font-bold mb-4">Graphic Design</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            nemo vero velit odit repudiandae fuga reiciendis voluptatum ad.
            Repudiandae, aliquid.
          </p>
        </div>
      </div>
      <div className="right flex justify-center items-end p-[2rem] lg:px-[15rem] lg:pb-[5rem] text-center bg-beach bg-cover">
        <div className="text-white">
          <h3 className="text-3xl font-bold mb-4">Photography</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            perspiciatis eaque culpa sint impedit aut iste excepturi fugiat
            pariatur et quo nam tempora dicta dolores labore quibusdam placeat
            nulla corrupti ipsum illo tempore sapiente ut? Asperiores?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
