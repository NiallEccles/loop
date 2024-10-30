import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import {useTranslations} from 'next-intl';
import { Container } from '@mantine/core';

export default function HomePage() {
  const t = useTranslations('ProfilePage');

  return (
    <>
      <ColorSchemeToggle />
      <Container size="sm">
        <h1>{t('title')}</h1>
      </Container>
    </>
  );
}
