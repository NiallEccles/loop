import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  const t = useTranslations('ProfilePage');
  return (
    <>
      <ColorSchemeToggle />
      <h1>{t('title')}</h1>
    </>
  );
}
