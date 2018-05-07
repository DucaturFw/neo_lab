import Neon, {api,wallet} from '@cityofzion/neon-js';
// class Wallet {
//     generateaccount(){
//        const acct = new wallet.Account();
//         let publicKey = acct.publicKey;
//         let privateKey = acct.privateKey;
//         let Wif = acct.WIF;
//         console.log(acct);
//         // return {acct};
//     }
// }
//создание аккаунта
const acct = new wallet.Account(); 
        console.log(acct);