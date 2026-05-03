import BannerPage from "@/components/Banner";
import FeaturedSection from "@/components/FeaturedSection";
import HomeInfoSection from "@/components/HomeInfoSection";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <BannerPage/>
   <FeaturedSection/>
   <HomeInfoSection/>
   </div>
  );
}
