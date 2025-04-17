import crown from '../../public/icons/crown.png';
import track from '../../public/icons/track.png';
import fire from '../../public/icons/fire.png';
import seeding from '../../public/icons/seeding.png';
import bolt from '../../public/icons/bolt.png';
import google from '../../public/icons/google.png';
import github from '../../public/icons/github.png';
import { StaticImageData } from 'next/image';

type Icon = {
  src: StaticImageData;
  alt: string;
};
export const icons: Record<string, Icon> = {
  crown: { src: crown, alt: 'Crown Icon' },
  track: { src: track, alt: 'Track Icon' },
  fire: { src: fire, alt: 'Fire Icon' },
  seeding: { src: seeding, alt: 'Seeding Icon' },
  bolt: { src: bolt, alt: 'Bolt Icon' },
  google: { src: google, alt: 'Google Icon' },
  github: { src: github, alt: 'GitHub Icon' },
};
