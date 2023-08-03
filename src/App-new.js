/* src/App.js */
import React, { useEffect, useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { createVisitor } from "./graphql/mutations";
import { listVisitors } from "./graphql/queries";

// import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { id: null, name: "", surname: "", enterTime: "" };

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchVisitors() {
    try {
      const visitorData = await API.graphql(graphqlOperation(listVisitors));
      const visitors = visitorData.data.listVisitors.items;
      setVisitors(visitors);
    } catch (err) {
      console.log("error fetching visitors");
    }
  }

  async function addVisitor() {
    try {
      if (!formState.name || !formState.surname) return;
      const visitor = { ...formState };
      setVisitors([...visitors, visitor]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createVisitor, { input: visitor }));
    } catch (err) {
      console.log("error creating visitor:", err);
    }
  }

  return (
    // <Authenticator>
    //   {({ signOut, user }) => (
      <main>
        <div style={styles.container}>
        {/* <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button> */}
        <h2>Amplify Visitors</h2>
        <input
          onChange={(event) => setInput("name", event.target.value)}
          style={styles.input}
          value={formState.name}
          placeholder="Name"
        />
        <input
          onChange={(event) => setInput("surname", event.target.value)}
          style={styles.input}
          value={formState.surname}
          placeholder="Surname"
        />
        <button style={styles.button} onClick={addVisitor}>
          Create Visitor
        </button>
        {visitors.map((visitor, index) => (
          <div key={visitor.id ? visitor.id : index} style={styles.visitor}>
            <p style={styles.visitorName}>{visitor.name}</p>
            <p style={styles.visitorSurname}>{visitor.surname}</p>
          </div>
        ))}
      </div>
      </main>

    // )}   
      
    // </Authenticator>
  );
};

const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  visitor: { marginBottom: 15 },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  visitorName: { fontSize: 20, fontWeight: "bold" },
  todoSurname: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};

export default App;
