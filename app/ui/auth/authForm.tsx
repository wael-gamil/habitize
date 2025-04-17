'use client';
import styles from './authForm.module.css';
import { inter } from '@/app/ui/fonts';
import Button from '../button';
import Link from 'next/link';
type AuthFormProps = {
  type: 'login' | 'register' | 'reset';
  fields: {
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
  }[];
  //todo: add onsubmit prop to handle form submission
  buttonText: string;
};
//todo: add validation for fields
export default function AuthForm({ type, fields, buttonText }: AuthFormProps) {
  return (
    <form
      action={'/'}
      method='POST'
      className={`${styles.loginForm} ${inter.className}`}
    >
      {fields.map((item, index) => {
        return (
          <div className={styles.inputContainer} key={index}>
            <label htmlFor={item.name}>{item.name}</label>
            <input
              type={item.type}
              id={item.name}
              name={item.name}
              placeholder={item.placeholder}
              required={item.required}
            />
          </div>
        );
      })}
      {type === 'login' && (
        <div className={styles.forgotPassword}>
          <Link href='/reset-password'>Forgot Password?</Link>
        </div>
      )}
      <Button type='submit' ariaLabel={buttonText} />
      {/* continue with google */}
      {type !== 'reset' && (
        <Button
          type='button'
          ariaLabel='Continue with Google'
          reverse={true}
          icon='google'
          // onClick={() => {
          //   //todo: add google auth logic
          // }}
        />
      )}
      {/* continue with github */}
      {type !== 'reset' && (
        <Button
          type='button'
          ariaLabel='Continue with GitHub'
          reverse={true}
          icon='github'
          onClick={() => {
            //todo: add github auth logic
          }}
        />
      )}
    </form>
  );
}
