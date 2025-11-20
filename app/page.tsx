import Image from "next/image";
import BannerArea from "./components/layout/banner";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <BannerArea />
    </div>
  );
}
