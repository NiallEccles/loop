import { Box, Button, Group, Container } from '@mantine/core';
import { Heart, MessageCircle, Share } from "lucide-react";

type PostActionBarProps = {}
export default function PostActionBar({}:PostActionBarProps) {
    return (
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
    )
}