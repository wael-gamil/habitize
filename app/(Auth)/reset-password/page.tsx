import styles from '../page.module.css';
import AuthForm from '../../ui/auth/authForm';
import Link from 'next/link';
import { inter, orbitron } from '@/app/ui/fonts';
export default function ResetPasswordPage() {
  const fields = [
    {
      name: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${orbitron.className}`}>Habitize</h1>
      {/* //todo: complete the reset password form when backend is ready */}
      <AuthForm type='reset' fields={fields} buttonText='Reset Password' />
      <div className={`${styles.registerLink} ${inter.className}`}>
        <p>
          <Link href='/login'>Back To Login Page</Link>
        </p>
      </div>
    </div>
  );
}
