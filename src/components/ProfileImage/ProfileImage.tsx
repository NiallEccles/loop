'use client';
import Avatar, { genConfig } from 'react-nice-avatar';

type ProfileImageProps = {
    name: string
}
export default function ProfileImage({name}:ProfileImageProps) {
    const config = genConfig(name)
    return (
        <div className="bg-amber-300 p-5">
            <Avatar className="outline outline-8 outline-white" style={{ width: '8rem', height: '8rem' }} {...config} />
        </div>
    )
}