//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
    // const items = [
    //     "New York",
    //     "Boston",
    //     "Paris",
    //     "London"
    // ]
    
    // Hook to use built in 
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0] // variable
    // arr[1] // updater

    // Event handler
    //const handleClick = (event: MouseEvent) => console.log(event);

    const getMessage = () => {
        return props.items.length === 0 && <p>No items found</p>;
        // return items.length === 0 ? <p>No items found</p> : null;
    }

    return (
    // React requires the <> because it can only add on html component
    // Think of adding a div with all of this within the div
    <>
        <h1>{props.heading}</h1>
        {getMessage()}
        <ul className="list-group">
            {props.items.map((item, index) => (
                <li 
                className={selectedIndex === index ? "list-group-item active" : 'list-group-item'}
                onClick={() => {
                    setSelectedIndex(index)
                    props.onSelectItem(item);
                }}
                //onClick={handleClick}
                key={item}>{item}</li>
            ))}
        </ul>
    </>
);
}

export default ListGroup;