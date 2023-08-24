import React from "react";

function StatutMariage({ verifierStatutMariage, message }) {
  return (
    <div className="center-all">
      <button className="statut-maried" onClick={verifierStatutMariage}>
        Vérifier le Statut de Mariage
      </button>
      <p>{message}</p>
    </div>
  );
}

export default StatutMariage;
