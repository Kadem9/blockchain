const ContratMariage = artifacts.require("ContratMariage");

contract("ContratMariage", (accounts) => {
  const conjoint1 = accounts[0];
  const conjoint2 = accounts[1];

  it("doit initialiser correcteent les valeurs", async () => {
    const contratMariage = await ContratMariage.new(conjoint1, conjoint2);
    const estMarie = await contratMariage.estMarie();
    assert.equal(estMarie, false, "Le mariage ne devrait pas être effectué");
  });

  it("doit permettre de marier les conjoints", async () => {
    const contratMariage = await ContratMariage.new(conjoint1, conjoint2);
    await contratMariage.marier({ from: conjoint1 });
    const estMarie = await contratMariage.estMarie();
    assert.equal(estMarie, true, "Le mariage devrait être effectué");
  });

  it("ne devrait pas permettre à un inconnu de marier les conjoints", async () => {
    const contratMariage = await ContratMariage.new(conjoint1, conjoint2);
    try {
      await contratMariage.marier({ from: accounts[2] });
      assert.fail("L'opération doit échouer");
    } catch (error) {
      const estMarie = await contratMariage.estMarie();
      assert.equal(estMarie, false, "Le mariage ne devrait pas être effectué");
    }
  });

  it("doit permettre de divorcer les conjoints", async () => {
    const contratMariage = await ContratMariage.new(conjoint1, conjoint2);
    await contratMariage.divorcer({ from: conjoint1 });
    const estMarie = await contratMariage.estMarie();
    assert.equal(estMarie, false, "Le mariage devrait être divorcé");
  });

  it("ne devrait pas permettre à un inocunnu de divorcer les conjoints", async () => {
    const contratMariage = await ContratMariage.new(conjoint1, conjoint2);
    await contratMariage.marier({ from: conjoint1 });
    try {
      await contratMariage.divorcer({ from: accounts[2] });
      assert.fail("L'opération aurait dû échouer");
    } catch (error) {
      const estMarie = await contratMariage.estMarie();
      assert.equal(estMarie, true, "Le mariage devrait être marié");
    }
  });
});
