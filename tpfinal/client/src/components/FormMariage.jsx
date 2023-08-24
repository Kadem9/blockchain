import React, { useState } from "react";
import Web3 from "web3";

function FormMariage({ creerMariage }) {
  const [conjoint1, setConjoint1] = useState("");
  const [conjoint2, setConjoint2] = useState("");
  const [formError, setFormError] = useState("");
  const [mariageCree, setMariageCree] = useState(false);

  const isFormValid = conjoint1 !== "" && conjoint2 !== "";

  const isValidAddress = (address) => {
    if (!address) return false;
    const web3 = new Web3();
    return web3.utils.isAddress(address);
  };

  const handleCreerMariage = () => {
    if (isFormValid) {
      if (isValidAddress(conjoint1) && isValidAddress(conjoint2)) {
        creerMariage(conjoint1, conjoint2);
        setMariageCree(true);
        setFormError("");
      } else {
        setFormError("Veuillez entrer des adresses Ethereum valides.");
      }
    } else {
      setFormError("Veuillez remplir tous les champs avant de soumettre.");
    }
  };

  return (
    <div className="center-all">
      <h2>Gestion du Mariage</h2>
      <div>
        <label>Adresse du Conjoint 1: </label>
        <input
          className="input-conjoint"
          placeholder="Adresse du conjoint 1"
          value={conjoint1}
          onChange={(e) => setConjoint1(e.target.value)}
        />
      </div>
      <div>
        <label>Adresse du Conjoint 2: </label>
        <input
          className="input-conjoint"
          placeholder="Adresse du conjoint 2"
          value={conjoint2}
          onChange={(e) => setConjoint2(e.target.value)}
        />
      </div>
      {isFormValid && !mariageCree && (
        <button
          className="submit-maried"
          onClick={handleCreerMariage}
          disabled={!isFormValid}
        >
          Créer Mariage
        </button>
      )}

      {formError && <p className="form-error">{formError}</p>}
    </div>
  );
}

export default FormMariage;
