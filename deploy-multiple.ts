import { DefaultProvider, bsv } from 'scrypt-ts'
import { Multiplication } from './src/contracts/multiply'
import { NeucronSigner } from 'neucron-signer'

async function main() {
    const provider = new DefaultProvider({ network: bsv.Networks.mainnet })
    const signer = new NeucronSigner(provider)
    const amount = 1

    await signer.login('sales@timechainlabs.io', 'string')
    await Multiplication.loadArtifact()
    const a = BigInt(5)
    const b = BigInt(6)
    const value = BigInt(a * b)

    const instance = new Multiplication(value)
    await instance.connect(signer)

    const deployTxn = await instance.deploy(amount)
    console.log(
        'Smart lock Deployed:https://whatsonchain.com/tx/' + deployTxn.id
    )
    const c = 5
    const d = 6
    await new Promise((f) => setTimeout(f, 5000))
    const { tx: checkTxn } = await instance.methods.unlock(c, d)

    console.log(
        'Contract unlocked successfully : https://whatsonchain.com/tx/' +
            checkTxn.id
    )
}

main()
