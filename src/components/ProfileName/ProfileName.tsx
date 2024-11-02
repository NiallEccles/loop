'use client';
import {mockData} from "@/mockData";

type ProfileNameProps = {
    displayName: string;
    userName: string;
}
export default function ProfileName({displayName, userName}:ProfileNameProps) {
    return (
        <div className='flex flex-col justify-end pl-5'>
            <h3 className='font-bold text-lg'>
                {displayName}
            </h3>
            <h3>
                @{userName}
            </h3>
        </div>
    )
}