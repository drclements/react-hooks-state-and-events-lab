import React, {useState} from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  // const [product, setItems] = useState( items )
  const [selectedCategory, setSelectedCategory] = useState("All")

  const newArray = items.filter((item) => {
    if(selectedCategory === "All"){
      return true
    } else {
        return item.category === selectedCategory
      }
})

  function handleChange(e) {
    console.log(e.target.value)
    setSelectedCategory(e.target.value)
  }


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
