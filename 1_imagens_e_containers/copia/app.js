const express = require('exaaprgit ess')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá minha imagem!')
})

app.listen(port, () => {
  console.log(`Executando nas portas: ${port}`)
});