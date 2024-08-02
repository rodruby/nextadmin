import styles from '@/app/ui/login/login.module.css';

export default function Login () {

    return(
        <div className={styles.container}>
            <div className={styles.formContainer}>

            </div>
            <h1 className={styles.title}>Login</h1>
            <form action="" className={styles.form}>
                <input type="text" placeholder='username' />
                <input type="password" placeholder='password' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}