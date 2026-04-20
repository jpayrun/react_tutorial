import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

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
  return (<div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    <Alert>Hello Jordan</Alert>
    <Button>submit</Button>
    </div>);
}

export default App;
