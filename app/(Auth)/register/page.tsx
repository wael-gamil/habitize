import styles from '../page.module.css';
import { orbitron, inter } from '@/app/ui/fonts';
import Link from 'next/link';
import AuthForm from '@/app/ui/auth/authForm';
export default function Register() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${orbitron.className}`}>Habitize</h1>
      {/* //todo: complete the register form when backend is ready */}
      <AuthForm
        type='register'
        fields={[
          {
            name: 'Email Address',
            type: 'text',
            placeholder: 'example@domain.com',
            required: true,
          },
          {
            name: 'Full Name',
            type: 'text',
            placeholder: 'Enter your full name',
            required: true,
          },
          {
            name: 'Password',
            type: 'password',
            placeholder: 'Enter your password',
            required: true,
          },
          {
            name: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm your password',
            required: true,
          },
        ]}
        buttonText='Register'
      />
      <div className={`${styles.registerLink} ${inter.className}`}>
        <p>
          Already have an account? <Link href='/login'>Log in</Link>
        </p>
      </div>
      {/* footer copyright */}
      <div className={styles.footer}>
        © 2025 <span>Habitize</span>. All rights reserved.
      </div>
    </div>
  );
}
