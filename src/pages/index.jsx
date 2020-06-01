import React from "react";
import ShoppingList from "../components/ShoppingList";

function HomePage() {
  return (
    <div>
      <h1>Your shopping list</h1>
      <ShoppingList listName="default" />
    </div>
  );
}

export default HomePage;
