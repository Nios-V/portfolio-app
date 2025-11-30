import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            py={10}
            borderTopWidth="1px"
            borderColor="border.subtle"
            bg="bg.panel"
        >
            <Container maxW="6xl" textAlign="center" color="fg.muted">
                <Text color="fg.muted" fontSize="sm">
                    © {new Date().getFullYear()} Nicolás Cáceres. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
}