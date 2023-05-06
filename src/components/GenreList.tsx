import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
    <List mt="25px">
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={3}>
          <HStack>
            <Image
              objectFit={"cover"}
              boxSize={"45px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
