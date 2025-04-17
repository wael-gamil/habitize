'use client';
import styles from './layout.module.css';
import SideInfo from '../ui/auth/sideInfo';
import { usePathname } from 'next/navigation';
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //todo: construct the side info component to show different content based on the page
  const sideInfo = {
    title: 'Join the Habitize Community',
    items: [
      {
        icon: 'seeding',
        title: 'Transform Your Life',
        description:
          'Join Habitize to start building positive habits and break free from procrastination.',
      },
      {
        icon: 'track',
        title: 'Track Your Progress',
        description:
          'Monitor your daily progress and stay motivated on your journey.',
      },
      {
        icon: 'fire',
        title: 'Achieve Your Goals',
        description:
          'Set and achieve your goals with our powerful habit tracker.',
      },
      {
        icon: 'crown',
        title: 'Personal Growth',
        description:
          'With every new habit you adopt, unlock rewards that inspire your personal and cosmic growth.',
      },
    ],
  };
  const didYouKnow = {
    title: 'Did You Know?',
    items: [
      {
        icon: 'seeding',
        title: 'Transform Your Life',
        description:
          'Join Habitize to start building positive habits and break free from procrastination.',
      },
      {
        icon: 'track',
        title: 'Track Your Progress',
        description:
          'Monitor your daily progress and stay motivated on your journey.',
      },
      {
        icon: 'fire',
        title: 'Achieve Your Goals',
        description:
          'Set and achieve your goals with our powerful habit tracker.',
      },
      {
        icon: 'crown',
        title: 'Personal Growth',
        description:
          'With every new habit you adopt, unlock rewards that inspire your personal and cosmic growth.',
      },
    ],
  };

  const pathname = usePathname();
  return (
    <div className={styles.container}>
      {children}
      {/* if user in login page show did you know sideinfo else show join the habitize community */}
      {pathname === '/register' ? (
        <SideInfo {...sideInfo} spinner={true} />
      ) : (
        <SideInfo {...didYouKnow} spinner={true} />
      )}
    </div>
  );
}
