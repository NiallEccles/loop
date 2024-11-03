'use client';
import {mockData} from "@/mockData";
import {Card, Text, Flex, Divider } from '@mantine/core';
import {useState} from "react";
import Avatar, {genConfig} from "react-nice-avatar";
import {useFormatter} from "next-intl";
import {useUser} from "@auth0/nextjs-auth0/client";
import PostActionBar from "@/components/PostActionBar/PostActionBar";
import PostCarousel from "@/components/PostCarousel/PostCarousel";
import PostImageGrid from "@/components/PostImageGrid/PostImageGrid";

type TimelinePost = {
    text: string;
    timestamp: string;
    location: string;
    media: {
        type: string;
        description: string;
        order: string;
    }[],
    engagement: {
        likes: number;
        comments: number;
        shares: number;
    }
}
export default function TimelinePost({}:TimelinePost) {
    const post = mockData[8]!.posts![0];
    const TRANSITION_DURATION = 200;

    const config = genConfig(mockData[8].first_name)

    const format = useFormatter();

    const postDate = format.dateTime(Number(post.timestamp), {
        year: 'numeric',
        month: 'short',
    });

    const [opened, setOpened] = useState(false);
    const [initialSlide, setInitialSlide] = useState(0);

    const { user } = useUser();

    const setAndOpenModalWithStartingImage = (index: number) => {
        setOpened(true);
        setInitialSlide(index)
    };
    return (
        <Card padding="lg" withBorder my="xs">
            <Flex justify="space-evenly" gap="lg">
                <Flex>
                    <Avatar style={{ width: '3rem', height: '3rem' }} {...config} />
                </Flex>
                <Flex direction="column" mt="sm">
                    <Flex mb="md">
                        <Text mr="xs">
                            {mockData[8].first_name}
                        </Text>
                        <Text mr="xs">
                            @{mockData[8].user_name}
                        </Text>
                        <Text>
                            {postDate}
                        </Text>
                    </Flex>
                    <Text size="md" mb="md">
                        {post.text}
                    </Text>
                    <PostImageGrid
                        images={
                            [
                                "./blob-scene-haikei.png",
                                "./stacked-steps-haikei.png",
                                "./stacked-waves-haikei.png"
                            ]
                        }
                        setAndOpenModalWithStartingImage={setAndOpenModalWithStartingImage}
                    />
                    <Card.Section>
                        <PostCarousel opened={opened} initialSlide={initialSlide} setOpened={setOpened} />
                    </Card.Section>
                    <Card.Section>
                        <Divider mt="md"/>
                        <PostActionBar />
                    </Card.Section>
                </Flex>
            </Flex>
        </Card>
    )
}