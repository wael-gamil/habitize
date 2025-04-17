
import styles from './button.module.css';
import { icons } from './icons';
import Image from 'next/image';
type ButtonProps = {
  type?: 'submit' | 'button' | 'reset';
  onClick?: () => void;
  ariaLabel?: string;
  reverse?: boolean;
  icon?: keyof typeof icons;
};

export default function Button({
  type = 'submit',
  onClick,
  ariaLabel,
  reverse = false,
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${reverse ? styles.reverseColor : ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && (
        <Image
          src={icons[icon].src}
          alt={icons[icon].alt}
          className={styles.icon}
        />
      )}
      {ariaLabel}
    </button>
  );
}
