
import React from "react";

export const ChildA = ({ coin, setCoin }) => {
  return (
    <>
      <div className="card p-5 m-3">
        <h1>Bahubali Coins - {coin}</h1>
        <button
          className="btn btn-outline-warning"
          onClick={() => setCoin(coin + 1)}
        >
          Add Coins
        </button>
      </div>
    </>
  );
};
