import {
  Image,
  Box,
  Text,
  Flex,
  useDisclosure,
  ModalContent,
  Modal,
  SimpleGrid,
} from "@chakra-ui/react";
import * as Icon from "../SvgIcons";
import * as S from "./styled";

const Card = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <S.VStack spacing={5}>
      <S.BoxImage onClick={onOpen}>
        <S.Image
          borderRadius={10}
          height={325}
          width={325}
          src="/images/image-equilibrium.jpg"
          alt="Ice cube image"
        />
        <S.HoverBackground>
          <Icon.View />
        </S.HoverBackground>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalContent borderRadius={20} marginTop="-20vh">
            <Image
              onClick={onClose}
              borderRadius={10}
              src="/images/image-equilibrium.jpg"
              alt="Ice cube image"
            />
          </ModalContent>
        </Modal>
      </S.BoxImage>
      <Box width={325}>
        <S.Heading>
          <S.Link>Equilibrium #3429</S.Link>
        </S.Heading>
        <S.Paragraphe>
          Our Equilibrium collection promotes balance and calm.
        </S.Paragraphe>
      </Box>
      <SimpleGrid columns={2} width="100%">
        <S.Box>
          <Icon.Etherum />
          <Text color="hsl(178, 100%, 50%)">0.041 ETH</Text>
        </S.Box>
        <S.Box justifyContent="flex-end">
          <Icon.Clock />
          <Text color="hsl(215, 51%, 70%)">3 days left</Text>
        </S.Box>
      </SimpleGrid>
      <S.Divider />
      <Flex gap="20px" alignItems="center">
        <Image
          height={50}
          width={50}
          src="/images/image-avatar.png"
          alt="avatar image"
          borderRadius="50%"
          border="solid 1px white"
        />
        <Text color="hsl(215, 51%, 70%)" fontSize="18px">
          Creation of
          <S.Link href="https://github.com/vtulbu"> Jules Wyvern</S.Link>
        </Text>
      </Flex>
    </S.VStack>
  );
};

export default Card;
