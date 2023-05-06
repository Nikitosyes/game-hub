import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatforms from "../hooks/usePlatforms";

const platformSelector = () => {
  const { data, error, loading } = usePlatforms();

  if (error) return null;

  if (!error) {
    return (
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          <Text>Platforms</Text>
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
};

export default platformSelector;
