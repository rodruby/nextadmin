import NavBar from "@/app/ui/dashboard/navbar/navbar";
import SideBar from "@/app/ui/dashboard/sidebar/sidebar";

export default function Layout ({ children }) {

    return(
        <div>
            <div>
                <SideBar/>
            </div>
            <div>
                <NavBar/>
                { children }
            </div>
        </div>
    )
}