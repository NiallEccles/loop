'use client';
import Avatar, { genConfig } from 'react-nice-avatar';
import {mockData} from "@/mockData";

type ProfileImageProps = {
    name: string
}
export default function ProfileImage({name}:ProfileImageProps) {
    const config = genConfig(name)
    return (
        <Avatar className="outline outline-8 outline-white" style={{ width: '8rem', height: '8rem' }} {...config} />
    )
}