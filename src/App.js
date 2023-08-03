import React, { Fragment, useState, useEffect } from "react";

import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EditVisitor from "./components/EditVisitor.js";
import AddVisitor from "./components/AddVisitor.js";
import DelVisitor from "./components/DelVisitor.js";
import "@aws-amplify/ui-react/styles.css";
import {
  createVisitor,
  deleteVisitor,
  updateVisitor,
  updateNext
} from "./graphql/mutations";
import { listVisitors, getNext } from "./graphql/queries";



import { Amplify, API, graphqlOperation } from "aws-amplify";
import * as subscriptions from './graphql/subscriptions';
import awsExports from "./aws-exports.js";
Amplify.configure(awsExports);

function App() {
  const [sortOrder, setSortOrder] = useState("ASC");
  const [count, setCount] = useState(0);
  const [visitors, setVisitors] = useState([]);
 

  useEffect(() => {
    fetchVisitors();
  }, []);

  async function fetchVisitors() {
    try {
      const visitorData = await API.graphql(graphqlOperation(listVisitors));
      const visitors = visitorData.data.listVisitors.items;
      setVisitors(visitors);
      // const nextData = await API.graphql(graphqlOperation(getNext));
      //     console.log("nextData", nextData)
      // setCount(visitors[visitors.length-1].currentNumber);
    } catch (err) {
      console.log("error fetching visitors");
    }
  }

  // Subscribe to creation of Visitor
// const sub = API.graphql(
//   graphqlOperation(subscriptions.onCreateVisitor)
// ).subscribe({
//   next: ({ provider, value }) => console.log({ provider, value }),
//   error: (error) => console.warn(error)
// });

// Stop receiving data updates from the subscription
// sub.unsubscribe();

  async function addVisitor(name, surname) {
    let newVisitor = {
      currentNumber: count + 1,
      name: name,
      surname: surname,
    };
    // let nextDetails = {
    //   next: count
    // }
    try {
      const responce = await API.graphql(
        graphqlOperation(createVisitor, { input: newVisitor })
      );
      // await API.graphql(
      //   graphqlOperation(updateNext, { input: nextDetails })
      // );
      let addedVisitor = {
        currentNumber: responce.data.createVisitor.currentNumber,
        id: responce.data.createVisitor.id,
        name: responce.data.createVisitor.name,
        surname: responce.data.createVisitor.surname,
        createdAt: responce.data.createVisitor.createdAt,
      };
      setVisitors([...visitors, addedVisitor]);
      setCount(count + 1);
      // console.log( "responce", responce)
    } catch (err) {
      console.log("error creating visitor:", err);
    }
  }

  async function updatedVisitor(id, name, surname) {
    const visitorDetails = {
      id: id,
      name: name,
      surname: surname,
    };
    const responce = await API.graphql(
      graphqlOperation(updateVisitor, { input: visitorDetails })
    );
    // console.log("updatedVisitorresponce", responce);
    fetchVisitors();
  }

  async function delVisitor(id) {
    // console.log("id", id);
    const visitorDetails = {
      id: id,
    };
    const responce = await API.graphql(
      graphqlOperation(deleteVisitor, { input: visitorDetails })
    );
    // console.log("delVisitorresponce", responce);
    fetchVisitors();
  }

  const sortVisitor = (col) => {
    let sorted;
    if (sortOrder === "ASC") {
      sorted = [...visitors].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setVisitors(sorted);
      setSortOrder("DESC");
    }
    if (sortOrder === "DESC") {
      sorted = [...visitors].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setVisitors(sorted);
      setSortOrder("ASC");
    }
  };

  return (
    <>
      <Fragment>
        <div style={{ margin: "10rem" }}>
          <div className="d-flex justify-content-between py-2" ></div>

          <Table striped bordered hover size="sm" className='text-center'>
            <thead>
              <tr>
                <th>
                  #{" "}
                  <i
                    className="fa fa-sort"
                    onClick={() => sortVisitor("currentNumber")}
                  />
                </th>
                <th>
                  id{" "}
                  <i className="fa fa-sort" onClick={() => sortVisitor("id")} />
                </th>
                <th>
                  Name{" "}
                  <i
                    className="fa fa-sort"
                    onClick={() => sortVisitor("name")}
                  />
                </th>
                <th>
                  Surname{" "}
                  <i
                    className="fa fa-sort"
                    onClick={() => sortVisitor("surname")}
                  />
                </th>
                <th>
                  Enter Time{" "}
                  <i
                    className="fa fa-sort"
                    onClick={() => sortVisitor("enterTime")}
                  />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {visitors && visitors.length > 0 */}
              {visitors.length > 0
                ? visitors.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.currentNumber}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>{ new Date(item.createdAt).toLocaleString()}</td>
                        <td>
                          <EditVisitor
                            id={item.id}
                            name={item.name}
                            surname={item.surname}
                            updateVisitor={updatedVisitor}
                          />
                          &nbsp;
                          <DelVisitor id={item.id} delVisitor={delVisitor} />
                        </td>
                      </tr>
                    );
                  })
                : "No visitors"}
            </tbody>
          </Table>
          <br />
          <AddVisitor addVisitor={addVisitor} />
        </div>
      </Fragment>
    </>
  );
}

export default App;
