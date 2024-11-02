'use client';
import {mockData} from "@/mockData";
import { Button } from '@mantine/core';

type ProfileAction = {
    displayName: string;
    userName: string;
}
export default function ProfileAction() {
    return <Button variant="filled" radius="xl">Follow</Button>;
}