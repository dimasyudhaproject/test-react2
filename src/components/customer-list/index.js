import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    setHeading(name);
  }

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          onChange={handleChange}
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input"
          value={name}
        />
        <button
          onClick={handleClick}
          type="submit"
          className="ml-30"
          data-testid="submit-button"
        >
          Add Customer
        </button>
      </section>

      <ul className="styled mt-50" data-testid="customer-list">
        <li
          className="slide-up-fade-in"
          data-testid="list-item1"
          key="list-item1"
        >
          Customer
          <h1>{heading}</h1>
        </li>
      </ul>
    </div>
  );
}

export default CustomerList;
