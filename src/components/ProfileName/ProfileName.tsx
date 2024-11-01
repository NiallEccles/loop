'use client';
import {mockData} from "@/mockData";

type ProfileNameProps = {
    displayName: string;
    userName: string;
}
export default function ProfileName({displayName, userName}:ProfileNameProps) {
    return (
        <div className='flex flex-col justify-end pb-5'>
            <h3 className='font-bold text-lg text-black'>
                {displayName}
            </h3>
            <h3 className='text-gray-800'>
                @{userName}
            </h3>
        </div>
    )
}