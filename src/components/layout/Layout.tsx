import { Box } from "@chakra-ui/react";
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
}
const MotionBox = motion(Box);

export default function Layout({ children }: LayoutProps) {
    return (
        <Box bg="gray.50" minH="100vh" display="flex" flexDirection="column">
            <Navbar />

            <MotionBox as="main" pt="80px" initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }} flex="1">
                {children}
            </MotionBox>
            <Footer />
        </Box>
    );
}