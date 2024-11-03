'use client';
import {mockData} from "@/mockData";
import {Card, Image, Text, Badge, Button, Group, Modal, Grid, Flex, Container, Divider, Space, Box, ActionIcon} from '@mantine/core';
import {Carousel, Embla} from '@mantine/carousel';
import { Heart, MessageCircle, Share } from 'lucide-react';
import {useEffect, useState} from "react";
import Avatar, {genConfig} from "react-nice-avatar";
import {useFormatter} from "next-intl";
import {getSupabase} from "@/utils/supabase";
import {getSession} from "@auth0/nextjs-auth0";
import {useUser} from "@auth0/nextjs-auth0/client";

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
export default function TimelinePost() {
    const post = mockData[8].posts[0]!;
    const TRANSITION_DURATION = 200;
    const [opened, setOpened] = useState(false);
    const [embla, setEmbla] = useState<Embla | null>(null);
    const [initialSlide, setInitialSlide] = useState(0);
    const [posts, setPosts] = useState<any[]>([]);

    const config = genConfig(mockData[8].first_name)

    const format = useFormatter();

    const postDate = format.dateTime(Number(mockData[8].posts[0].timestamp), {
        year: 'numeric',
        month: 'short',
    });

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
                    <Grid grow>
                        <Grid.Col span={4} onClick={()=>setAndOpenModalWithStartingImage(0)}>
                            <Image radius="md" width='100%' src="./blob-scene-haikei.png"/>
                        </Grid.Col>
                        <Grid.Col span={4} onClick={()=>setAndOpenModalWithStartingImage(1)}>
                            <Image radius="md" width='100%' src="./stacked-steps-haikei.png"/>
                        </Grid.Col>
                        <Grid.Col span={4} onClick={()=>setAndOpenModalWithStartingImage(2)}>
                            <Image radius="md" width='100%' src="./stacked-waves-haikei.png"/>
                        </Grid.Col>
                    </Grid>


                    <Card.Section>
                        <Modal
                            opened={opened}
                            size={'70%'}
                            padding={0}
                            withCloseButton={true}
                            onClose={() => setOpened(false)}
                            centered
                        >
                            <Carousel
                                initialSlide={initialSlide}
                            >
                                <Carousel.Slide>
                                    <Image width='100%' src="./blob-scene-haikei.png"/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image width='100%' src="./stacked-steps-haikei.png"/>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <Image width='100%' src="./stacked-waves-haikei.png"/>
                                </Carousel.Slide>
                            </Carousel>
                        </Modal>
                    </Card.Section>
                    <Card.Section>
                        <Divider mt="md"/>
                        <Box my="xs">
                            <Group>
                                <Container>
                                    <Button variant="subtle" radius="md">
                                        <Heart/>
                                        <h4>3</h4>
                                    </Button>
                                </Container>
                                <Container>
                                    <Button variant="subtle">
                                        <MessageCircle/>
                                        <h3>6</h3>
                                    </Button>
                                </Container>
                                <Container>
                                    <Button variant="subtle">
                                        <Share/>
                                    </Button>
                                </Container>
                            </Group>
                        </Box>
                    </Card.Section>
                </Flex>
            </Flex>
        </Card>
    )
}