import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className={styles.heading}><span className={styles.highlight}>Vaccine Center</span></h1>
                <h3 className={styles.heading2}><span className={styles.highlight}>ศูนย์บริการวัคซีน</span></h3>
            </div>
        </div>
    );
}