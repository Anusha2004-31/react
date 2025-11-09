import React, { useState } from "react";
import { ChildA } from "./ChildA";
import { ChildB } from "./ChildB";


const Parent = () => {
  const [coin, setCoin] = useState(0);

  return (
    <>

      <div className="card m-5 p-5 border rounded bg-light text-center">
        <h1>The React-Kingdom</h1>
        <h4>Total coins - {coin}</h4>
        <ChildA coin={coin} setCoin={setCoin} />
        <ChildB coin={coin} />
      </div>
    </>
  );
};

export default Parent;
