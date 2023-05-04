import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  Score: number;
}

const CriticScore = ({ Score }: Props) => {
  let color = Score > 75 ? "green" : Score > 60 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize={"14px"} padding={2} borderRadius={4}>
      {Score}
    </Badge>
  );
};

export default CriticScore;
