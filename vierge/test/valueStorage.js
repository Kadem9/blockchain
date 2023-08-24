const ValueStorage = artifacts.require("ValueStorage");

 

contract("ValueStorage", () => {
    it("should set and get the value correctly", async () => {
        const instance = await ValueStorage.deployed();

 

        // Set value to 42
         await instance.setValue(42);

 

        // Get the stored value
       const storedValue = await instance.getValue();

        console.log('storedValue = ', storedValue);

        // Assert the stored value is 42
        assert.equal(storedValue, 42, "Stored value should be 42");
    });
});