# Airport-App

Clone the repository into your projects directory:

```
git clone git@github.com:lnikol00/Airport-App.git
```

# Project Description

## Simple web application made for educational purposes.  

* Learning and understanding how Tailwind CSS works. <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>

* Using Redux with Typescript. <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>

* Creating Web API using ASP.NET, C# programing langugage and SQLite or MSSQL.<a href="https://www.w3schools.com/cs/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" width="40" height="40"/> </a> <a href="https://dotnet.microsoft.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> <a href="https://www.microsoft.com/en-us/sql-server" target="_blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" width="40" height="40"/> </a>

# Backend - server

In this project directory, you can run: 
```
cd AirportApplication
```
followed by

```
dotnet restore
```

The purpose of dotnet restore is to restore the dependencies of a .NET project.

To run the server type: 

```js
dotnet run
```

This command will start server on localhost

## Database option (SQLite or MSSQL)

Depending which database you want to use, you will adjust your Program.cs

SQLite:

```js
// If you want to use SQLite databse
builder.Services.AddSingleton<IAirportRepository, AirportRepository_SQLite>();
```

MSSQL:
```js
// If you want to use MSSQL database
builder.Services.AddSingleton<IAirportRepository, AirportRepository_MSSQL>();
```
# Frontend - client

In the project directory, you can run:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```
npm install 
```
or

```
npm i
```

The command npm install is used in Node.js and JavaScript development to install the dependencies listed in a project's package.json file.
