import React from "react";
import MenuAdmin from "../../components/menuAdmin/MenuAdmin";
import HeaderGlobal from "../../components/headerGlobal/HeaderGlobal";
import AdminUsers from "../../components/Adminusers/AdminUsers";

export default function AdminUser() {
  return (
    <div>
      <HeaderGlobal />
      <section className="flex">
        <MenuAdmin />
        <div className="w-[100%] mt-10">
          <AdminUsers />
        </div>
      </section>
    </div>
  );
}
