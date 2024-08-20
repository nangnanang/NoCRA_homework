import { add } from "./add";
import { remove } from "./remove";

const App = () => {
  const number = 0;
  const removeNumber = remove(number);
  const addNumber = add(number);

  console.log(process.env.API_URL);
  return (
    <div>
      <h1>{removeNumber}</h1>
      <h1>{number}</h1>
      <h1>{addNumber}</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
