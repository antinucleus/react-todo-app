import React from 'react';
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react';

type Props = {
  isOpen: boolean;
  handleApprove: () => void;
  handleReject: () => void;
  onClose: () => void;
};

export const ConfirmationBox = ({
  isOpen,
  handleApprove,
  handleReject,
  onClose,
}: Props) => {
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Todo Silme Onayı
            </AlertDialogHeader>

            <AlertDialogBody>
              Seçmiş olduğunuz todo silinecek onaylıyor musunuz ?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={handleReject}>İptal</Button>
              <Button colorScheme="red" onClick={handleApprove} ml={3}>
                Sil
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
