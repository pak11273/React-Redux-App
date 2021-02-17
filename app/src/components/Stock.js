import React from "react";
import { connect } from "react-redux";

const Stock = (props) => {
  const {
    open,
    high,
    low,
    price,
    volume,
    latest,
    prev,
    change,
    percent,
  } = props;
  return (
    <div>
      <h2>Stock Info</h2>
      <p>open: {open}</p>
      <p>high: {high}</p>
      <p>low: {low}</p>
      <p>price: {price}</p>
      <p>volume: {volume}</p>
      <p>latest trading day: {latest}</p>
      <p>previous close: {prev}</p>
      <p>change: {change}</p>
      <p>change percent: {percent}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { data } = state.stockReducer;
  return {
    open: data["02. open"],
    high: data["03. high"],
    low: data["04. low"],
    price: data["05. price"],
    volume: data["06. volume"],
    latest: data["07. latest trading day"],
    prev: data["08. previous close"],
    change: data["09. change"],
    percent: data["10. change percent"],
  };
};

export default connect(mapStateToProps)(Stock);
