import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import Card from "../components/Card";

const Home: NextPage = () => {
  return (
    <Center h="100vh" bgColor="hsl(217, 54%, 11%)">
      <Card />
    </Center>
  );
};

export default Home;
