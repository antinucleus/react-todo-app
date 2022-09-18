import { Text, TextProps } from '@chakra-ui/react';

interface IProps extends TextProps {
  message: string;
}

export const ErrorLabel = ({ message, ...rest }: IProps) => {
  return (
    <Text color="red.300" mt={2} mb={2} {...rest}>
      {message}
    </Text>
  );
};
