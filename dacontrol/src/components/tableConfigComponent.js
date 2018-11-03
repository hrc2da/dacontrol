import React, { Component } from "react";
import { Table } from "react-bootstrap";

const TableConfigComponent = ({ configString }) => {
  let orbits = [[], [], [], [], []];
  for (let i = 0; i < configString.length; i++) {
    if (configString[i] == "1") {
      console.log("i", i);
      orbits[Math.floor(i / 12)].push(i % 12);
    }
  }
  console.log(orbits);
  return (
    <Table striped bordered hover variant="dark" size="sm">
      <tbody>
        <tr>
          <td style={{ width: "10%" }}>Available</td>
          <td>{/*not supported yet*/}</td>
        </tr>
        <tr>
          <td>Orbit 1</td>
          <td>{orbits[0].toString()}</td>
        </tr>
        <tr>
          <td>Orbit 2</td>
          <td>{orbits[1].toString()}</td>
        </tr>
        <tr>
          <td>Orbit 3</td>
          <td>{orbits[2].toString()}</td>
        </tr>
        <tr>
          <td>Orbit 4</td>
          <td>{orbits[3].toString()}</td>
        </tr>
        <tr>
          <td>Orbit 5</td>
          <td>{orbits[4].toString()}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableConfigComponent;
