import Stock from "./components/Stock";
import { connect } from "react-redux";
import { test } from "./actions";
import { useState } from "react";

function App({ symbol, test }) {
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
      <h1>Realtime Stock Info</h1>
      <p>Find a stock. Learn its History.</p>
      <p>Change your future</p>
      <input value={input} placeholder={symbol} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      <Stock />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    symbol: state.stockReducer["01. symbol"],
  };
};

export default connect(mapStateToProps, { test })(App);
