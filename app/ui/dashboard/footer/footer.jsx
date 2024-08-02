import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Invoice App
        </div>
        <div className={styles.copyright}>
            All rights reserved
        </div>
    </div>
  );
}

export default Footer;