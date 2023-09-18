
import { User } from "../Hooks/dataUser";
export default function RoutesUser({ element }) {
  const { userData } = User();
  const rol = userData.rol;

  if (rol === "user") {
    return element;
  } 
}
