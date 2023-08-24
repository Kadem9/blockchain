import React from "react";

function Divorce({ estMarie, divorcerMariage }) {
  return (
    <div>
      {estMarie && (
        <div>
          <button onClick={divorcerMariage}>Divorcer</button>
        </div>
      )}
    </div>
  );
}

export default Divorce;
