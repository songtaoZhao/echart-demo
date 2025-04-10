import "./styles.css";
import Bar from "./components/chart/bar";
import Line from "./components/chart/line";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Bar />
      <Line />
    </div>
  );
}
