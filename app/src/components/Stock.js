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
  return {
    open: state.stockReducer["02. open"],
    high: state.stockReducer["03. high"],
    low: state.stockReducer["04. low"],
    price: state.stockReducer["05. price"],
    volume: state.stockReducer["06. volume"],
    latest: state.stockReducer["07. latest trading day"],
    prev: state.stockReducer["08. previous close"],
    change: state.stockReducer["09. change"],
    percent: state.stockReducer["10. change percent"],
  };
};

export default connect(mapStateToProps)(Stock);
