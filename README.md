# Teste Prático  Dti-digital



## 📁 Estrutura do Projeto

```
code/
│
├── backend/        # API em Node.js
└── frontend/       # Interface em React
```

---

##  Passos para Execução

### 1. Clone o repositório

Use o comando abaixo no terminal para clonar o repositório:

```bash
git clone https://github.com/Eduuhms/Teste-Pr-tico---dti-digital.git
```

---

### 2. Instale as dependências

#### Backend

Navegue até a pasta do backend e instale as dependências do Node.js:

```bash
cd backend
npm install
```

#### Frontend

Em seguida, navegue até a pasta do frontend e instale as dependências do React:

```bash
cd ../frontend
cd dti-test
npm install
```

---

### 3. Inicie os servidores

#### Backend

No terminal, dentro da pasta `backend`, execute:

```bash
npm run dev
```

#### Frontend

Em um novo terminal, dentro da pasta `dti-test`, execute:

```bash
npm run dev
```

> A aplicação frontend será iniciada em: `http://localhost:5173`

---

##  Testes

Para rodar os testes unitários do backend, dentro da pasta `backend`, execute:

```bash
npm test
```

---

##  Tecnologias Utilizadas

- Node.js
- Express
- React
- Axios
- Jest (para testes)

---

##  Lista de premissas assumidas

Foi assumido que este é um projeto pequeno, desenvolvido com o objetivo de auxiliar no dia a dia de um pequeno empresário. Por isso, optou-se por uma estrutura simples, utilizando constantes para representar os petshops “cadastrados” e uma arquitetura mais enxuta, suficiente para resolver o problema proposto de forma clara e objetiva.

---

##  Decisões de projeto

- **Escolha do Node.js no backend:** Optei por utilizar Node.js com Express por já ter familiaridade, o que permitiu um desenvolvimento mais ágil. Como o escopo do projeto é simples, o Node atendeu perfeitamente às necessidades.

- **Arquitetura em camadas :** Foi adotada uma separação entre camadas de rotas e de serviço para manter o código organizado, facilitar a leitura e permitir escalabilidade e até mesmo uma transição para uma arquitetura MVC futuramente.

- **Uso de constantes para representar petshops:** Considerando que os dados dos petshops são fixos e fornecidos no enunciado, optou-se por armazená-los diretamente como constantes no backend, não havendo a necessidade de um banco de dados.

- **Frontend em React:** Para a construção da interface, foi utilizado React, pela sua facilidade de integração com APIs e reatividade.

- **Comunicação via API REST:** A interação entre frontend e backend se dá através de requisições HTTP, o que facilita o desacoplamento entre as camadas e permite evolução futura para ambientes mais complexos.

---

##  Futuras melhorias

- **Integração com um banco de dados:** Substituir o uso de constantes estáticas por uma base de dados real, permitindo cadastrar petshops, armazenar históricos de cálculos e facilitar a manutenção e escalabilidade da aplicação.

- **Migração para uma arquitetura mais robusta:** Adotar padrões de projeto mais sólidos, como separação por camadas (MVC).

- **Implementação de novas features** Adicionar funcionalidades como o cadastro de animais do canil, o que permitiria manter um controle mais eficiente sobre os cães atendidos. Além disso, poderia ser criada uma página de divulgação do canil com foco em adoções, incluindo um contador de cães já adotados para incentivar o engajamento.

