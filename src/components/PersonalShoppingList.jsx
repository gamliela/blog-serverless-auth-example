import React from "react";
import { useAuth, signIn, signOut } from "../shared/firebase_auth";
import ShoppingList from "./ShoppingList";

function PersonalShoppingList() {
  const { isLoading, user } = useAuth();

  if (isLoading) {
    return "Loading...";
  } else if (user == null) {
    return <button onClick={signIn}>Sign In With Google</button>;
  } else {
    return (
      <div>
        <h3>User: {user.displayName}</h3>
        <ShoppingList listName={`user-${user.uid}`} />
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }
}

export default PersonalShoppingList;
