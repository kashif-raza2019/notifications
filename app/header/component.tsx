'use client';
import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure
  } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

  const Header = ( ) => {
    const { open, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (open ? onClose() : onOpen());
  
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={3}
        bg="teal.500"
        color="white"
      >
        <Flex align="center" mr={6}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Chakra UI   
          </Heading>
        </Flex>
  
        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <RxHamburgerMenu />
        </Box>
  
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: open ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Text>Docs</Text>
          <Text>Examples</Text>
          <Text>Blog</Text>
        </Stack>
  
        <Box
          display={{ base: open ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Create account
          </Button>
        </Box>
      </Flex>
    );
  };
  
  export default Header;
  