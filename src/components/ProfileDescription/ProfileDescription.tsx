'use client';
import {useFormatter} from 'next-intl';

type ProfileDescription = {
    bio: string;
    date: string;
    followers: number;
    following: number;
}
export default function ProfileDescription({bio, date, followers, following}: ProfileDescription) {
    const format = useFormatter();

    const joinDate = format.dateTime(Number(date), {
        year: 'numeric',
        month: 'short',
    });

    return (
        <div className='flex flex-col justify-end pl-3'>
            <p>{bio}</p>
            <p className='mt-3'>Joined {joinDate}</p>
            <div className='flex flex-row mt-3'>
                <p className='mr-3'>{following} Following</p>
                <p>{followers} Followers</p>
            </div>
        </div>
    )
}