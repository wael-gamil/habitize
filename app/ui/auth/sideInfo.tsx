import styles from './sideInfo.module.css';
import { inter } from '../fonts';
import Image from 'next/image';
import { icons } from '../icons';

type SideInfoProps = {
  title: string;
  spinner?: boolean;
  items: {
    icon: keyof typeof icons;
    title: string;
    description: string;
  }[];
};
export default function SideInfo({ title, spinner, items }: SideInfoProps) {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h2 className={styles.title}>{title}</h2>
      {spinner && (
        <span className={styles.spinner}>
          <Image
            src={icons.bolt.src}
            alt={icons.bolt.alt}
            className={styles.spinnerIcon}
          />
        </span>
      )}
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <Image
              src={icons[item.icon].src}
              alt={icons[item.icon].alt}
              className={styles.icon}
            />
            <div className={styles.text}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
