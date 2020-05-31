import React, { useCallback, useRef, useState } from "react";

let nextId = 0;

function ShoppingList() {
  const [list, setList] = useState([]);
  const inputElement = useRef(null);

  // adds the value in inputElement to the list
  const addItem = useCallback(() => {
    if (inputElement.current && inputElement.current.value) {
      const newValue = inputElement.current.value;
      setList((list) => [...list, newValue]);
      inputElement.current.value = "";
    }
  }, []);

  // removes the i'th item from the list
  const deleteItem = (index) => {
    setList((list) => list.filter((_, i) => i != index));
  };

  return (
    <table>
      <tbody>
        {list.map((item, i) => (
          <tr key={nextId++}>
            <td>{item}</td>
            <td>
              <button onClick={() => deleteItem(i)}>Delete</button>
            </td>
          </tr>
        ))}
        <tr>
          <td>
            <input ref={inputElement} type="text" />
          </td>
          <td>
            <button onClick={addItem}>Add</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Your shopping list</h1>
      <ShoppingList />
    </div>
  );
}

export default HomePage;
