import NavBar from "@/app/ui/dashboard/navbar/navbar";
import SideBar from "@/app/ui/dashboard/sidebar/sidebar";
import styles from "@/app/ui/dashboard/dashboard.module.css";

export default function Layout ({ children }) {

    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <SideBar/>
            </div>
            <div className={styles.content}>
                <NavBar/>
                { children }
            </div>
        </div>
    )
}