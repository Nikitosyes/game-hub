import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box w={"100%"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement
            onClick={(e) => {
              if (ref.current) onSearch(ref.current.value);
            }}
            cursor={"pointer"}
            children={<BsSearch />}
            sx={{
              transition: "transform 0.2s ease",
              _hover: {
                transform: "scale(135%)",
              },
            }}
          />
          <Input 
            ref={ref}
            cursor="auto"
            borderRadius={20}
            placeholder="Search games..."
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
