import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9","0", "."];
function App() {
  const dispatch=useDispatch();
  const value = useSelector((state) => state.value);
  return (
    <div className="app">
      <div className="container">
        <h1>Calculator</h1>
        <div className="app__inner">
          <p className="result">{value}</p>
          <div className="buttons">
            <div className="item fiol_btn" onClick={() => dispatch({ type: "FUNC", payload: "PLUS" })}>+</div>
            <div className="item fiol_btn" onClick={() => dispatch({ type: "FUNC", payload: "MINUS" })}>-</div>
            <div className="item fiol_btn" onClick={() => dispatch({ type: "FUNC", payload: "DEVIDE" })}>/</div>
            <div className="item red_btn" onClick={() => dispatch({ type: "CANCEL" })}>C</div>
            <div className="item fiol_btn" onClick={() => dispatch({ type: "FUNC", payload: "MULTY" })}>*</div>
            <div className="item fiol_btn" onClick={() => dispatch({ type: "FUNC", payload: "RADICAL" })}>√</div>
            <div className="item fiol_btn" onClick={() => dispatch({ type: "FUNC", payload: "PERSENT" })}>%</div>
            <div className="item red_btn" onClick={() => dispatch({ type: "BACK" })}>back</div>
           
          </div>
          <div className="numbers">
            {numbers.map((item) => (
              <div key={`item-${item + 1}`} className="item" onClick={() => dispatch({ type: "NUMB", payload: item })}>
                {item}
              </div>
            ))}
            <div className="item item-result" onClick={() => dispatch({ type: "RESULT" })}>=</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
