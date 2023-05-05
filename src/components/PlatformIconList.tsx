import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaLinux,
  FaDesktop,
  FaXbox,
  FaPlaystation,
  FaApple,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    linux: FaLinux,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <>
      <HStack marginY={1.5}>
        {platforms.map((platform) => (
          <Icon fontSize={"18px"} as={iconMap[platform.slug]} color="gray.500" />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
