import { DefaultProvider, Sha256, bsv, toByteString } from 'scrypt-ts'
import { Demo } from './src/contracts/demo'
import { NeucronSigner } from 'neucron-signer'

(async ()=> {
     const provider = new DefaultProvider({network: bsv.Networks.mainnet})
     const signer = new NeucronSigner(provider)
     await signer.login("sales@timechainlabs.io","string")
      await Demo.loadArtifact()

      const message = toByteString('timechainlabs', true)

      const instance = new Demo(Sha256(message))
       await instance.connect(signer)

       const deployTx = await instance.deploy(1)
        console.log('contract deplyed : ', deployTx.id)
})()