import {
  Button,
  Input,
  Grid,
  GridItem,
  Checkbox,
  Text,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ErrorLabel } from '@/components';
import { ITodo } from '../types';
import { useCreateTodo } from '../api';
import { useNavigate } from 'react-router-dom';

type TodoValues = Omit<ITodo, 'id'>;

const todoSchema = yup.object().shape({
  content: yup
    .string()
    .required('Lütfen boş bırakmayınız')
    .min(5, '5 karakterden aşağı olamaz'),
  isCompleted: yup.bool().notRequired(),
}) as yup.SchemaOf<TodoValues>;

const defaultValues: TodoValues = {
  content: '',
  isCompleted: false,
};

export const CreateTodoForm = () => {
  const navigate = useNavigate();
  const createTodoMutation = useCreateTodo();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<TodoValues>({
    defaultValues,
    resolver: yupResolver(todoSchema),
  });

  const handleCreateTodo = async (data: TodoValues) => {
    console.log('Data : ', data);
    await createTodoMutation.mutateAsync(data);
    navigate('/app');
  };

  return (
    <Grid gap={4} display="flex" flexDir="column">
      <GridItem>
        <Controller
          name="content"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              isInvalid={!!errors.content?.message}
              placeholder="İçerik"
              variant="outline"
              onChange={onChange}
              errorBorderColor="red.300"
            />
          )}
        />
        <ErrorLabel message={errors.content?.message || ''} />
      </GridItem>
      <GridItem display="flex" flexDir="row" alignItems="center">
        <Text>Durum</Text>
        <Controller
          name="isCompleted"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Checkbox
              ml={3}
              isChecked={value}
              isInvalid={!!errors.isCompleted?.message}
              placeholder="Durum"
              variant="outline"
              onChange={onChange}
            />
          )}
        />
      </GridItem>
      <GridItem>
        <Button
          isLoading={isSubmitting || createTodoMutation.isLoading}
          isDisabled={!!errors.content?.message}
          type="submit"
          onClick={handleSubmit(handleCreateTodo)}
        >
          Oluştur
        </Button>
      </GridItem>
    </Grid>
  );
};
