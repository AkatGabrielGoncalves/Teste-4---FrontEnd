# **Teste-4---FrontEnd**

## # **Frontend**
```
cd frontend
```

### - Install dependencies

```
yarn install
```

### - Start local server

```
yarn serve
```

### - Build project

```
yarn build
```

### - Frontend images

![No data](./assets/images/frontendimage.png)

![With data](./assets/images/frontendimagewithdata.png)

### **What dependencies does this project use?**

- Vue
- Vuetify
- Axios
- Typescript

### **Description**

- The frontend was built using Vue.js with Vuetify, written in TypeScript and to communicate with the backend was used Axios.
- Remember to set the enviroment variables:
  - VUE_APP_BACKENDHOST
  - VUE_APP_BACKENDPORT
    - Remember to set up inside a .env file in the root directory of the frontend.
## # **Backend**

```
cd backend
```

### - Install dependencies

```
yarn install
```

### - Start server

```
yarn start
```
### **What dependencies does this project use?**

- Express.js
- Postgres driver

### **Description**

- The backend was written in plain javascript to keep it simple, it uses Express.js to create a server and the postgres driver to communicate with the database
- The backend expects to use a database populated with the following data:
  - http://www.ans.gov.br/externo/site_novo/informacoes_avaliacoes_oper/lista_cadop.asp
  - You can use my repository: https://github.com/AkatGabrielGoncalves/Teste-3---Banco-de-dados which has a postgres script for populating the database.
- The backend only has one route which is ```/registration?search=XXX&page=XXX&perPage=XXX```
- There are enviroment variables that are needed:
  - DBUSER
  - DBHOST
  - DBNAME
  - DBPASSWORD
  - DBPORT
    - Remember to set up inside a .env file in the root directory of the backend.