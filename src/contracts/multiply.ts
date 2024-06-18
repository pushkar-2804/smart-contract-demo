import { SmartContract, method, prop, assert } from 'scrypt-ts'

export class Multiplication extends SmartContract {
    @prop()
    // stores the correct value
    multipliedVal: bigint
    // constructor
    constructor(input: bigint) {
        super(...arguments)
        this.multipliedVal = input
    }

    @method()
    public unlock(a: bigint, b: bigint) {
        // checks for the correct input values
        assert(a * b == this.multipliedVal, 'incorrect value')
    }
}
