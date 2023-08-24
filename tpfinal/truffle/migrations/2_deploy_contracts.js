const ContratMariage = artifacts.require("ContratMariage");

module.exports = function (deployer) {
  const adresseConjoint1 = "0xe59d5236b87a52c8d4c104CecE87150640441e4C"; // adresse kadem
  const adresseConjoint2 = "0x1AE4cB588BB7fEba48807C9A9a528Fa0EFBdDf49"; // adresse khadim

  deployer.deploy(ContratMariage, adresseConjoint1, adresseConjoint2);
};
