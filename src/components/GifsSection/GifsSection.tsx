"use client";

import { Box, Flex, Text, Center, Heading } from "@chakra-ui/react";
import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";

interface GifItem {
  src: string;
  alt: string;
}

const gifs: GifItem[] = [
  {
    src: "/assets/HereComesBitconGifs/bitcoin-eats-pigeon.gif",
    alt: "bitcoin eats pigeon",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-hands-on-head.gif",
    alt: "bitcoin hands on head",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-hugs.gif",
    alt: "bitcoin hugs",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-waving-pointing.gif",
    alt: "bitcoin waving and pointing",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-pointing-mocoo.gif",
    alt: "bitcoin pointing with mocoo dogs",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-dancing.gif",
    alt: "bitcoin dancing",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-fan-selfie.gif",
    alt: "bitcoin fan selfie",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-drinking-milk.gif",
    alt: "bitcoin drinking milk",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-scratching-head.gif",
    alt: "bitcoin scratching head",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-pointing.gif",
    alt: "bitcoin pointing",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-dips-moocoo.gif",
    alt: "bitcoin dips moocoo",
  },
  {
    src: "/assets/HereComesBitconGifs/bitcoin-dancing-pubkey.gif",
    alt: "bitcoin dancing pubkey",
  },
];

const GifsSection: React.FC = () => {
  return (
    <>
      <Heading
        color="#14253d"
        textAlign="center"
        mb={6}
        mt={20}
        fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
        fontWeight="500"
        lineHeight="1.2"
      >
       The Perfect Gif
      </Heading>

      <Center>
        <Text
          color="#4a5568"
          textAlign="center"
          maxW="700px"
          mb={{ base: "10", md: "20"}}
          fontSize="16px"
          fontWeight="400"
          lineHeight="1.5"
        >
          Share the joy of our 10-minute long Here Comes Bitcoin video with
          someone whose attention span was ruined long ago by the Internet’s
          relentless content deluge. Our library of endlessly looping bitcoin
          GIFs make the perfect, uh, what were we saying?
        </Text>
      </Center>

      <Box display="flex" justifyContent="center" mb={14}>
        <Flex wrap="wrap" w="100%">
          {gifs.map((gif, index) => (
            <Box key={index} p={3} w={["100%", "50%"]}>
              <Image
                src={gif.src}
                alt={gif.alt}
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
                layout="responsive"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      </Box>
      <Center>
        <CustomButton
          bg="#F7931A"
          href="https://giphy.com/herecomesbitcoin"
          color="white"
          fontSize="32px"
          padding="1.7rem 1.5rem"
        >
          Explore HCB Giphy
        </CustomButton>
      </Center>
    </>
  );
};

export default GifsSection;
