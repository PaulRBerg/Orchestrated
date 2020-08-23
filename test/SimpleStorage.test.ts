import { should } from 'chai';
import { SimpleStorageInstance } from '../types/truffle-contracts';


const SimpleStorage: Truffle.Contract<SimpleStorageInstance> = artifacts.require('./SimpleStorage.sol');
should();

/** @test {SimpleStorage} contract */
contract('SimpleStorage', (accounts) => {
    /**
     * Test the two contract methods
     * @test {SimpleStorage#set} and {SimpleStorage#get}
     */
    it('...should store the value 89.', async () => {
        const simpleStorageInstance = await SimpleStorage.deployed();

        // Set value of 89
        await simpleStorageInstance.set(89, { from: accounts[0] });

        // Get stored value
        const storedData = await simpleStorageInstance.get();

        (storedData.toString()).should.be.equal('89');
    });
});
