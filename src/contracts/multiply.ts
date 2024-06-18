import { SmartContract, method, prop, assert } from 'scrypt-ts'

export class Multiplication extends SmartContract {
    @prop()
    multipliedVal: bigint
    constructor(input: bigint) {
        super(...arguments)
        this.multipliedVal = input
    }

    @method()
    public unlock(a: bigint, b: bigint) {
        assert(a * b == this.multipliedVal, 'incorrect value')
    }
}
