import { Box, Container, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Box
            as="footer"
            py={10}
            borderTopWidth="1px"
            borderColor="gray.200"
            bg="white"
        >
            <Container maxW="6xl" textAlign="center" color="gray.600">
                <Text color="gray.500" fontSize="sm">
                    © {new Date().getFullYear()} Nicolás Cáceres. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
}