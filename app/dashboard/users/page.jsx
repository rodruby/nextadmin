import styles from "@/app/ui/dashboard/users/users.module.css";
import Search from "../search/search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const UsersPage = () => {
    return(
        <div className={styles.container}>
            
            <div className={styles.top}>
                <Search placeholder = "Search for a User" />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add</button>
                </Link>                
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created At</td>
                        <td>Role</td>
                        <td>Status</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image 
                                    src="/noavatar.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImage}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>john@anyemail.com</td>
                        <td>13.01.2023</td>
                        <td>Admin</td>
                        <td>Active</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.view}`}>View</button>                                
                                </Link>                                
                                <Link href="/">
                                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                </Link>
                            </div>                            
                        </td>
                    </tr>
                </tbody>
                
            </table>
            <Pagination />
            
        </div>
    )
}

export default UsersPage;