'use client';
import Avatar, { genConfig } from 'react-nice-avatar';

type ProfileImageProps = {
    name: string
}
export default function ProfileImage({name}:ProfileImageProps) {
    const config = genConfig(name)
    return (
        <div className="bg-amber-300 p-5">
            <Avatar style={{ width: '8rem', height: '8rem', outline: '6px solid white' }} {...config} />
        </div>
    )
}