import MenuAdmin from "../../components/menuAdmin/MenuAdmin";
import HeaderGlobal from "../../components/headerGlobal/HeaderGlobal"
import AdminGetProducts from "../../components/AdminGetProducts/AdminGetProducts"; 

export default function AdminProducts() {
  
  return (
    <div>
    <HeaderGlobal/>
    <section className="flex">
    <MenuAdmin/>
    <AdminGetProducts/>
    </section>
    </div>
  )
}
