import { connect } from "react-redux";
import { useState } from "react";

function App({ stock }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div>
      <h1>Realtime Stock Info</h1>
      <p>Find a stock. Learn its History.</p>
      <p>Change your future</p>
      <input value={input} onChange={handleChange} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stock: state.stockReducer.stock,
  };
};

export default connect(mapStateToProps)(App);
