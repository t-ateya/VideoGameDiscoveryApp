import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  // render Games
  //if user selects genre: Action, render: Action Games
  // if user selects platform e.g Xbox, render: Xbox Games
  // if user selects platform and genre e.g Xbox and Action, render: Xbox Action Games
  const heading = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || " "
  } Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
