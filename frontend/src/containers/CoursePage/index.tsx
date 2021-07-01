
import React from "react";
import { useState } from "react";
import { Container, Flex } from "@chakra-ui/react";
import { Collapse, Button, Heading } from "@chakra-ui/react";


const CoursePage: React.FC = () => {
	const [show, setShow] = useState(false)

	const handleToggle = () => setShow(!show)

	return (
		<Container mt={8}>
			<Heading as="h2" size="xl">Course name</Heading>
			<Flex
				as="div"
				h="fit-content"
				mt={4}
				mb={4}
				p={8}
				boxSizing="border-box"
				border="1px solid #c9c9c9"
				borderRadius="8px"
				flexWrap="wrap"
				justifyContent="flex-end"
			>
				<Collapse startingHeight={68} in={show}>
					Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
					terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
					labore wes anderson cred nesciunt sapiente ea proident enim eiusmod high life accusamus
					terry richardson ad squid.
				</Collapse>
				<Button size="sm" onClick={handleToggle} mt="8">
					{show ? "Close" : "More"}
				</Button>
			</Flex>
		</Container>
	)
}

export default CoursePage;