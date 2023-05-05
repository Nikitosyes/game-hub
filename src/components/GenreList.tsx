import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, loading, error } = useGenres();

  if (error) return null;
  if (loading) {
    return (
      <Box mt="45px">
        <Spinner
          thickness="5px"
          speed="1s"
          emptyColor="gray.200"
          color="black"
          size="xl"
        />
      </Box>
    );
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <HStack>
            <Image
              objectFit={"cover"}
              boxSize={"55px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
