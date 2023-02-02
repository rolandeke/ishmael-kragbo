import { Layout } from "./components/layout";
import { Jewelry } from "./components/product";
import { PageLoading } from "./components/loading";
import { useJewelry } from "./hooks/useJewelry";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { isLoading, jewelries } = useJewelry();
  const [searchParams] = useSearchParams();

  useEffect(() => {}, [searchParams])
  

  const List = () => {
    return (
      <div className="flex flex-wrap">
        {jewelries.map((item, key) => (
          <Jewelry className="w-1/4 p-3" key={key} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="App">
      <Layout>{isLoading ? <PageLoading /> : <List />}</Layout>
    </div>
  );
}

export default App;
