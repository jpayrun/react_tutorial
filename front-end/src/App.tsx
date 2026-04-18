import ListGroup from "./components/ListGroup";

const items = [
        "New York",
        "Boston",
        "Paris",
        "London"
    ]

const handleSelectItem = (item: string) => {
  console.log(item);
} 

function App() {
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
}

export default App;
