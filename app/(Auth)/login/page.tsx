import styles from '../page.module.css';
import { orbitron, inter } from '@/app/ui/fonts';
import Link from 'next/link';
import AuthForm from '@/app/ui/auth/authForm';
export default function Login() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${orbitron.className}`}>Habitize</h1>
      {/* //todo: complete the login form when backend is ready */}
      <AuthForm
        type='login'
        fields={[
          {
            name: 'Email Address',
            type: 'text',
            placeholder: 'example@domain.com',
            required: true,
          },
          {
            name: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            required: true,
          },
        ]}
        buttonText='Login'
      />
      <div className={`${styles.registerLink} ${inter.className}`}>
        <p>
          Don't have an account? <Link href='/register'>Register</Link>
        </p>
      </div>
      <div className={styles.footer}>
        © 2025 <span>Habitize</span>. All rights reserved.
      </div>
    </div>
  );
}
