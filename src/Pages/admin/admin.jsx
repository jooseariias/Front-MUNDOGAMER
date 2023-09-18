import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin";
import MenuAdmin from "../../components/menuAdmin/MenuAdmin";
import LinesChart from "../../components/statistics/LinesChart";
import BarsChart from "../../components/statistics/BarsChart";
import PiesChart from "../../components/statistics/PiesChart";

export default function admin() {
  return (
    <div>
    <HeaderAdmin/>
      <section className="flex">
        <MenuAdmin />
        <section className="flex justify-center w-full flex-wrap gap-10 mt-10">

          <div className="w-[400px] ">
            {" "}
            <h2 className="text-white">Ventas</h2>
            <LinesChart />
          </div>
          <div className="w-[400px]">
            <h2 className="text-white">Usuarios</h2>
            <BarsChart />
          </div>
          <div>
            <PiesChart />
          </div>
        </section>
      </section>
    </div>
  );
}
