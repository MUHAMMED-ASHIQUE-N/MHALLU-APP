import { FC } from "react";
import  LargeScreenUi  from "../components/common/LargeScreenUi";
import  useIsSmallScreen  from "../hooks/useIsSmallScreen";
import { Header } from "../components/common/Header";
import  {AppNavbar}  from "../components/common/AppNavbar";
import CardSvg from "../assets/icons/card-svgrepo-com.svg";
import MessSvg from "../assets/icons/kitchen-cooker-utensils-svgrepo-com.svg";
import NOCSvg from "../assets/icons/memo-svgrepo-com.svg";
import ComplaintsSvg from "../assets/icons/comment-2-svgrepo-com.svg";
import { ServiceCard } from "../components/common/ServiceCard";
export const Home: FC = () => {
  const isSmallScreen = useIsSmallScreen();

  if (isSmallScreen) {
    return <LargeScreenUi />;
  }

  return (
    <div className="bg-white  min-h-dvh">
      
      <Header />
      <div className="p-4">
        <div className="bg-black rounded-2xl overflow-hidden h-48">
          <img
            src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop"
            alt="Mosque at night"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="px-5 py-5 ">
        <div className="grid grid-cols-2 gap-6">
          <ServiceCard
            icon={CardSvg}
            labelLines={["Monthly", "Payment"]}
          />
          <ServiceCard
            icon={MessSvg}
            labelLines={["MESS", "Payment"]}
          />
          <ServiceCard
            icon={NOCSvg}
            labelLines={["NOC", "Request"]}
          />
          <ServiceCard
            icon={ComplaintsSvg}
            labelLines={["Complaints /", "Suggestions"]}
          />
        </div>
      </div>
      <AppNavbar />
     
    </div>
  );
};

export default Home;