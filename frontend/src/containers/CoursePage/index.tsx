
import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Heading, Text, Image } from "@chakra-ui/react";


const CoursePage: React.FC = () => {
    return (
        <Container mt={8} maxW="container.xl" flexWrap="nowrap">
            <Heading as="h1" size="xl">Your courses</Heading>
            <Text fontSize="xl" color="gray.500">Courses you've worked on recently</Text>
            <Flex justifyContent="space-between">
                <Flex
                    as="div"
                    h="fit-content"
                    mt={4}
                    mb={4}
                    p={8}
                    cursor="pointer"
                    flexBasis="608px"
                    border="1px solid rgba(0, 0, 0, 0.14)"
                    borderRadius="8px"
                    justifyContent="space-between"
                    transition="border-color 100ms linear, box-shadow 100ms linear"
                >
                    <Flex flexDirection="column">
                        <Text fontSize="md" fontWeight="500" color="gray.500">LEARNING PATH</Text>
                        <Flex flexDirection="column" justifyContent="space-between" height="100%">
                            <Heading as="h2" size="lg">Enrichment and Competition Math</Heading>
                            <Text fontSize="sm" fontWeight="500" color="gray.500">11 courses</Text>
                        </Flex>
                    </Flex>
                    <Image
                        boxSize="150px"
                        objectFit="cover"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                        marginLeft="24px"
                    />
                </Flex>
            </Flex>
            
        </Container>
    )
}

export default CoursePage;