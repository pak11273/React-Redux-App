import React, { useEffect } from "react";

import { connect } from "react-redux";
import { getStock } from "../actions";
import { useState } from "react";

const Stock = (props) => {
  useEffect(() => {
    props.getStock();
  }, []);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleClick = () => {
    test();
  };

  return (
    <div>
      <input value={input} placeholder="Enter Symbol" onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <h2>Stock Info</h2>
      <p>open: {props.data && props.data["02. open"]}</p>
      <p>high: {props.data && props.data["03. high"]}</p>
      <p>low: {props.data && props.data["04. low"]}</p>
      <p>price: {props.data && props.data["05. price"]}</p>
      <p>volume: {props.data && props.data["06. volume"]}</p>
      <p>
        latest trading day: {props.data && props.data["07. latest trading day"]}
      </p>
      <p>previous close: {props.data && props.data["08. previous close"]}</p>
      <p>change: {props.data && props.data["09. change"]}</p>
      <p>change percent: {props.data && props.data["10. percent change"]}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.stockReducer;
  console.log("data: ", data);
  return {
    data,
  };
};

export default connect(mapStateToProps, { getStock })(Stock);
