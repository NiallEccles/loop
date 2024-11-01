import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import {useTranslations} from 'next-intl';
import { Container } from '@mantine/core';
import {mockData} from '../../mockData';
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import ProfileName from "@/components/ProfileName/ProfileName";

export default function HomePage() {
  const t = useTranslations('ProfilePage');

  return (
    <>
      <ColorSchemeToggle />
        <Container size="sm">
            {/*<h1>{t('title')}</h1>*/}
            <div className='flex'>
                <ProfileImage name={mockData[8].first_name}/>
                <ProfileName displayName={mockData[8].first_name} userName={mockData[8].user_name}/>
            </div>
            <h2>{mockData[8].first_name}</h2>
            <h2>{mockData[8].user_name}</h2>
        </Container>
    </>
  );
}
