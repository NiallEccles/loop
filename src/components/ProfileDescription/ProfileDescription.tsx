'use client';
import {useFormatter} from 'next-intl';

type ProfileDescription = {
    bio: string;
    date: string;
}
export default function ProfileDescription({bio, date}: ProfileDescription) {
    const format = useFormatter();

    const joinDate = format.dateTime(Number(date), {
        year: 'numeric',
        month: 'short',
    });

    return (
        <div className='flex flex-col justify-end pl-3'>
            <p>{bio}</p>
            <p>Joined {joinDate}</p>
        </div>
    )
}