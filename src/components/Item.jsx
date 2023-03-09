import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex
} from "@chakra-ui/react";
import { Link } from "react-router-dom"

const Item = ({ id, name, price, description_short, image }) => {
  return (
    <div>
      <div key={id}>
        <Flex>
          <Card maxW="sm">
            <CardBody>
              <Image src={image}/>
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>{description_short}</Text>
                <Text color="orange.300" fontSize="2xl">
                  {price + ".-"}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Center className="btn-center">
                <Button variant="solid" colorScheme="orange">
                  <Link to={`/item/${id}`}>Details</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Flex>
      </div>
    </div>
  );
};

export default Item;
