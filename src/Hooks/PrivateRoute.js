import React from "react";

import { User } from "../Hooks/dataUser";

export default function PrivateRoute({ element }) {
  const { userData } = User();
  const rol = userData.rol;

  if (rol === "admin") {
    return element;
  } 
}
