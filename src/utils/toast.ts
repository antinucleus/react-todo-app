import { useToast as useChakraReatToast, AlertStatus } from '@chakra-ui/react';

interface IToastProps {
  status?: AlertStatus;
  message: string;
}

export const useToast = () => {
  const toast = useChakraReatToast();

  const showToast = ({ message, status }: IToastProps) => {
    toast({
      title: message,
      duration: 6000,
      isClosable: true,
      position: 'bottom-right',
      status: status,
    });
  };

  return { showToast };
};
