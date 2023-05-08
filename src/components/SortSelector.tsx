import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>dfdsfsa</MenuItem>
        <MenuItem>sdsfdsad</MenuItem>
        <MenuItem>ssdfsdfda</MenuItem>
        <MenuItem>ddsfsdfsa</MenuItem>
        <MenuItem>dfsfsdf</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
