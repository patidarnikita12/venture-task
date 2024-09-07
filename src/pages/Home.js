import AllTasks from "@/components/alltask";
import SideBar from "@/components/sidebar";
import TopNav from "@/components/topnav";
import TopNavSec from "@/components/topnav2";

function Home(){
    return(
       <div className="flex flex-col bg-[#dbeafe]">
        <div className="flex flex-col">
         <TopNav/>
         <TopNavSec/>
        </div>
        <div className="flex flex-row">
          <SideBar className="border-2 border-r border-gray"/>
          <AllTasks/>
        </div>
       </div>
    )
}

export default Home;