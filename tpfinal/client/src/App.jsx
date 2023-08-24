import React, { useState, useEffect } from "react";
import ContratMariage from "./contracts/ContratMariage.json";
import Web3 from "web3";
import FormMariage from "./components/FormMariage";
import StatutMariage from "./components/StatutMariage";
import Divorce from "./components/Divorce";
import "./styles.css";

function App() {
  const [contratMariage, setContratMariage] = useState(null);
  const [estMarie, setEstMarie] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    initContrat();
  }, []);

  const initContrat = async () => {
    try {
      const networkId = await window.ethereum.request({
        method: "net_version",
      });
      const deployedNetwork = ContratMariage.networks[networkId];

      const web3 = new Web3(window.ethereum);
      const instance = new web3.eth.Contract(
        ContratMariage.abi,
        deployedNetwork && deployedNetwork.address
      );

      setContratMariage(instance);

      const estMarie = await instance.methods.estMarie().call();
      setEstMarie(estMarie);
    } catch (error) {
      console.error("Erreur lors de l'initialisation du contrat", error);
    }
  };

  const creerMariage = async () => {
    if (contratMariage) {
      try {
        await contratMariage.methods
          .marier()
          .send({ from: window.ethereum.selectedAddress });
        setEstMarie(true);
      } catch (error) {
        console.error("Erreur lors de la création du mariage", error);
      }
    }
  };

  const verifierStatutMariage = async () => {
    if (contratMariage) {
      const statut = await contratMariage.methods
        .estMarie()
        .call({ from: window.ethereum.selectedAddress });

      if (statut) {
        setMessage("Vous êtes marié !");
      } else {
        setMessage("Vous n'êtes pas marié.");
      }
    }
  };

  const divorcerMariage = async () => {
    if (contratMariage) {
      try {
        await contratMariage.methods
          .divorcer()
          .send({ from: window.ethereum.selectedAddress });
        setEstMarie(false);
      } catch (error) {
        console.error("Erreur lors du divorce", error);
      }
    }
  };

  return (
    <div id="App">
      <div className="box-maried">
        <FormMariage creerMariage={creerMariage} />
        <StatutMariage
          verifierStatutMariage={verifierStatutMariage}
          message={message}
        />
        <Divorce estMarie={estMarie} divorcerMariage={divorcerMariage} />
      </div>
    </div>
  );
}

export default App;
