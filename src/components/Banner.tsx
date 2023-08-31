import styles from "./banner.module.css"
import Image from "next/image";

export default function Banner () {
    return(
        <div className={styles.banner}>
            <Image src={'/img/bg.png'}
            alt='cover'
            fill={true}
            priority
            objectFit ='cover'
            />
            <div className={styles.bannerText}>
                <h1 className="text-4xl font-semibold mb-3">Time To Vaccinate</h1>
                <h3 className="text-lg">Quick and Painless Protection</h3>
            </div>
        </div>
    );
}