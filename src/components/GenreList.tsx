import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5PX">
          <HStack>
            <Image
              boxSize="32PX"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
