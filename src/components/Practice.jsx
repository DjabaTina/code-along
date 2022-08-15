import React from "react";

import background from " ../assets/img/background.jpg";

function Practice() {
  return (
    <div className="flex justify-center itms-center h-screen">
      <div className="W-96 shadow-md">
        <div className="h-60 overflow-hidden">
          <img src={background} alt="" />
        </div>
        <div className="=p-5">
          <div className="flex justify-between">
            <h3 className="font-bold capitalize">Hp Pavilion 15</h3>
            <h6>GHC4500</h6>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            harum odit ad ullam cupiditate eaque voluptas, modi neque
            perspiciatis et officiis exercitationem illum. Beatae voluptatibus
            praesentium aliquid blanditiis, velit reiciendis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Practice;
