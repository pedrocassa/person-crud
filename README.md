
# CRUD de Pessoas

Projeto desenvolvido com a finalidade de estudar algumas tecnologias atuais de mercado


## Como rodar o projeto

Clone o projeto

```bash
  git clone https://github.com/pedrocassa/desafio-rsm.git
```

#### Backend

Abra um terminal e entre no diretório backend do projeto

```bash
  cd backend
```

Instale as dependências

```bash
  dotnet restore
```

Abra o pgAdmin e crie um novo database vazio

Em seguida substitua root, myPassword, localhost e myDataBase pelas informações referentes ao banco que será utilizado

```bash
  "User ID=root;Password=myPassword;Host=localhost;Port=5432;Database=myDataBase;"
```

Abra o arquivo backend/appsettings.Development.json e insira a string gerada anteriormente no lugar de yourConnectionString

```javascript
  {
    "Logging": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    },
    "ConnectionStrings": {
      "Default": yourConnectionString
    }
  }
```

Rode as migrations

```bash
  dotnet ef database update
```

Compile o projeto

```bash
  dotnet build
```

Rode o projeto

```bash
  dotnet run
```


#### Frontend

Abra um terminal e entre no diretório frontend do projeto

```bash
  cd frontend
```

Instale as dependências

```bash
  yarn install
```

Rode o projeto

```bash
  yarn start
```

## Stack utilizada

**Frontend:** React, styled-components e TypeScript

**Backend:** .Net Core, Asp.NET Core, EntityFrameworkCore e C#

**Database:** Postgres

