import Image from "next/image";
import SideBar from "./Componenst/SideBar";
import Search from "./Componenst/Search";
import Hero from "./Componenst/Hero";

export default function Home() {
  return (
    <div className="flex m-2">
      <SideBar />
      <Search />
      <Hero />
    </div>
  );
}
