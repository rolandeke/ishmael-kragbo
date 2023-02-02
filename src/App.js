import { jewelries } from "./jewelry";
import { Layout } from "./components/layout";
import { Jewelry } from "./components/product";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="flex flex-wrap">
          {jewelries.map((item, key) => (
            <Jewelry className="w-1/4 p-3" key={key} item={item} />
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default App;
