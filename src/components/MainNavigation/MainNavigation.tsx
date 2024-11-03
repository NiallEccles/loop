import { Text, Flex, Box, Button } from '@mantine/core';
import { Session } from "@auth0/nextjs-auth0";

type MainNavigationProps = {
    user: Session | null | undefined
}
export default async function MainNavigation({user}: MainNavigationProps) {
    
    return (
        <nav className="p-5">
            <Flex justify="space-between">
                <Box>
                    <Text size="lg" fw="bold">Loop</Text>
                </Box>
                <Box>
                    {
                        user ?
                        <Button component="a" href="/api/auth/logout">
                            Logout
                        </Button> :
                        <Button component="a" href="/api/auth/login">
                            Login
                        </Button>
                    }
                </Box>
            </Flex>
        </nav>
    )
}