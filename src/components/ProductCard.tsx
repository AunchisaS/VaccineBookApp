import styles from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                 <Image src={'/img/covid.jpg'}
                 alt ='Product Picture'
                 fill={true}
                 objectFit='cover'
                 />
            </div>
            <div className={styles.cardtext}>
                <h4>COVID Vaccine</h4>
                <p>The Johnson & Johnson vaccine employs a virus shell to transport SARS-CoV-2 DNA into cells, building immunity.</p>
            </div>
        </div>
    );
}