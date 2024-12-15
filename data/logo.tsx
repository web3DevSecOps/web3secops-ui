
import { Image } from '@chakra-ui/react';


export const Logo: React.FC = () => {
  return (
    <Image
      src="/static/images/logo.svg" // Replace with the actual path to your image file
      alt="Logo"
      width="50px"
      height="50px"
    />
  );
};