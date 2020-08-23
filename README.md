# When4Meet
When4Meet is a web application that provides an easy, sleek, and organized experience for finding and scheduling meetings based off of the availability of a team's members. 

### Built With

* [React](https://reactjs.org/docs/getting-started.html) - Frontend web framework used
* [Express](https://expressjs.com/) - Backend framework used
* [MYSQL](https://dev.mysql.com/doc/) - Database Management 


### Install requirements
1. Clone the repo (```https://github.com/slohacks/When4Meet.git```)
2. Install depenencies (```npm install```)
3. Create and set up your own custom sql server, and change the code in the connection.json file to your custom sql server data
```
{
  "host": "localhost",
  "user": "<yourmysqllogin>",
  "password": "<yourmysqlpass",
  "database": "<yourdb>"
}
```

### Running the App
1. Navigate to frontend (```cd frontend/```)
2. Start Development server (```npm start```)
3. In another command window, Navigate ro backend (```cd frontend/```)
4. Start Backend server (```node main.js -p 3001```)
