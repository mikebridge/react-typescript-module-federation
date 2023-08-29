import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Counter = () => {
  const [count, setCount] = useState(1);

  const location = useLocation();

  const handleError = () => {
    throw new Error("Throwing error!")
  }

  return (
    <Flex color="#000" gap="1rem" direction="column">
      <Text>
        Add by one each click <strong>APP-2</strong>
      </Text>
      <Text>Your click count : {count} </Text>
      <Button onClick={() => setCount((prevState) => prevState * 2)}>
        Click me
      </Button>
      <Button onClick={handleError}>
        Error
      </Button>
      {location.pathname !== "/" && (
        <Button as={Link} to="/">
          Back to container
        </Button>
      )}
    </Flex>
  );
};

export default Counter;
