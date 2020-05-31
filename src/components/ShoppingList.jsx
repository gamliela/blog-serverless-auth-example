import React, { useCallback, useRef, useState } from "react";

let nextId = 1;

function ShoppingList() {
  const [list, setList] = useState([]);
  const inputElement = useRef(null);

  // adds the value in inputElement to the list
  const addItem = useCallback(() => {
    if (inputElement.current && inputElement.current.value) {
      const newValue = inputElement.current.value;
      setList((list) => [...list, { id: nextId++, value: newValue }]);
      inputElement.current.value = "";
    }
  }, []);

  // removes item from the list, identified by id
  const deleteItem = (id) => {
    setList((list) => list.filter((item) => item.id != id));
  };

  return (
    <table>
      <tbody>
        {list.map((item) => (
          <tr key={item.id}>
            <td>
              {item.id}: {item.value}
            </td>
            <td>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
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
