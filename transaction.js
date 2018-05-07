import Neon, {api} from '@cityofzion/neon-js';

   // тут пишем сколько нео или газа хотоим отправить(создаём намерение)
   const intent = api.makeIntent({NEO:1, GAS:1}, 'AcHhTi4uDExt8WmiVqjUK57RXqezM5nJyB'); 

    //Конфиг для отправки транзакции
   const config = {
      net: 'TestNet', //Выбираем, MainNet or TestNet.
      address: 'KwgeqkDQUW5r6LnMf9XbE3gfQLRd7Bxvk82GSXQdF6JMxJn4gBj1',  // Адрес, с которго с пишуться НЕО ИЛИ ГАЗ.
      privateKey: '6PYR8pqAa7E2UkiUSWaVWeXf6Gq2gAYQEmkTgcbWVsqAvpEy9eExBkPbmV', //Приватный ключ адреса
      intents: intent
    }

   // метод для отправки транзакции
    Neon.sendAsset(sucees)
.then(config => {
  console.log(success)
})
.catch(error=> {
  console.log(error)
})