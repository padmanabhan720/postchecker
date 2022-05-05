import React, { useState, useEffect } from 'react'
import './App.css';
import Activities from "./components/Activities";
import AddAccount from "./components/AddAccount";
import Header from "./components/header";
import AccountList from "./components/AccountList";



function App() {

  //const LOCAL_STORAGE_KEY = "Accounts1";
  const [accounts, setAccount] = useState([]);
  const [response, setResponse] = useState([]);

  const AccountHandler = (Account) =>
  {
    setAccount([...accounts, Account ]);
  }


  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem("Accounts1"));
    if (retriveContacts) setAccount(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("Accounts1", JSON.stringify(accounts));
    /*const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(accounts)
  };
  fetch('https://localhost:8080/api/employees', requestOptions)
      .then(response => response.json())
      .then(data => setResponse(data));*/
      fetch('http://localhost:8080/student', { mode: 'no-cors'})
      .then(response => response.json())
      .then(data => {
        setResponse(data)
      });   
  }, [accounts]);

  return (
    <div className = "ui container ">
      
            <Header />
            <AddAccount AccountHandler = {AccountHandler}/>
            <AccountList accounts={accounts}/>
            <Activities />
            
            <p>{response}</p>
    </div>
    
    
  );
}

export default App;
