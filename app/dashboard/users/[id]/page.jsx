import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {


    return(
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={"/noavatar.png"} className={styles.imgContainer} alt="" fill />
                </div>
                {/* {user.username} */}
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="hidden" name="id" value=""/>
                    <label>Username</label>
                    <input type="text" name="username" placeholder="username" />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="email" />
                    <label>Password</label>
                    <input type="text" name="password" placeholder="password" />
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder="phone" />
                    <label>Address</label>
                    <textarea
                        name="address"
                        id="address"
                        rows="16"
                        placeholder="Address"
                    >Address</textarea>
                    <select name="isAdmin" id="isAdmin">
                        <option value={false}>
                            Is Admin?
                        </option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <select name="isActive" id="isActive">
                        <option value={true}>
                            Is Active?
                        </option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );

}


export default SingleUserPage