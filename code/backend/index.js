const express = require('express');
const app = express();
const PORT = 3001;
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API do Canil funcionando!');
});

const petshopRoutes = require('./routes/melhorPetshop');
app.use('/', petshopRoutes); 


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
