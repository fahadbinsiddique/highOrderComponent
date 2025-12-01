import Counter from "./Components/Counter";
import { Form } from "./Components/Form";

const App = () => {
  return (
    <>
      <div className="border-4 border-b-emerald-600 m-10">
        <Form />
      </div>
      <div className="border-4 border-b-emerald-600 m-10">
        <Counter />
      </div>
    </>
  );
};

export default App;
