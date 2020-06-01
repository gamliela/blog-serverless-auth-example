import React, { useCallback, useEffect, useRef, useState } from "react";
import { loadShoppingList, saveShoppingList } from "../shared/database";

let nextId = 0;

function ShoppingList({ listName }) {
  const [list, setList] = useState([]);
  const inputElement = useRef(null);

  // adds the value in inputElement to the list
  const addItem = useCallback(() => {
    if (inputElement.current && inputElement.current.value) {
      const newList = [...list, inputElement.current.value];
      saveShoppingList(listName, newList).then(() => setList(newList));
      inputElement.current.value = "";
    }
  }, [listName, list]);

  // removes the i'th item from the list
  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i != index);
    saveShoppingList(listName, newList).then(() => setList(newList));
  };

  // load initial list from the database
  useEffect(() => {
    loadShoppingList(listName).then(setList);
  }, [listName]);

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

export default ShoppingList;
