import { ColorSchemeToggle } from '../../components/ColorSchemeToggle/ColorSchemeToggle';
import {useTranslations} from 'next-intl';
import { Container } from '@mantine/core';
import {mockData} from '../../mockData';
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import ProfileName from "@/components/ProfileName/ProfileName";
import ProfileAction from "@/components/ProfileAction/ProfileAction";
import ProfileDescription from "@/components/ProfileDescription/ProfileDescription";

export default function HomePage() {
  const t = useTranslations('ProfilePage');

  return (
    <>
      <ColorSchemeToggle />
        <Container size="sm">
            {/*<h1>{t('title')}</h1>*/}
            <div className='flex justify-between items-end'>
                <div className='flex'>
                    <ProfileImage name={mockData[8].first_name}/>
                    <ProfileName displayName={mockData[8].first_name} userName={mockData[8].user_name}/>
                </div>
                <ProfileAction />
            </div>
            <div className='mt-5'>
                <ProfileDescription
                    bio={mockData[8].bio}
                    date={mockData[8].join_date}
                    followers={mockData[8].followers}
                    following={mockData[8].following}
                />
            </div>
        </Container>
    </>
  );
}
