import {
  Button,
  Input,
  Grid,
  GridItem,
  Text,
  Checkbox,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ErrorLabel, Loading } from '@/components';
import { ITodo } from '../types';
import { useTodo, useUpdateTodo } from '../api';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type TodoValues = Omit<ITodo, 'id'>;

const todoSchema = yup.object().shape({
  content: yup
    .string()
    .required('Lütfen boş bırakmayınız')
    .min(3, '3 karakterden aşağı olamaz'),
  isCompleted: yup.bool().notRequired(),
}) as yup.SchemaOf<TodoValues>;

const defaultValues: TodoValues = {
  content: '',
  isCompleted: false,
};

export const UpdateTodoForm = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const [isFetched, setIsFetched] = useState(false);

  const todoQuery = useTodo(id);
  const updateTodoMutation = useUpdateTodo();

  const {
    handleSubmit,
    control,
    getValues,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<TodoValues>({
    defaultValues,
    resolver: yupResolver(todoSchema),
  });

  useEffect(() => {
    if (!todoQuery.isLoading && !isFetched) {
      setValue('content', todoQuery.data?.content || '');
      setValue('isCompleted', todoQuery.data?.isCompleted || false);

      setIsFetched(true);
    }
  }, [todoQuery, setValue, isFetched]);

  const handleUpdateTodo = async (data: TodoValues) => {
    console.log(data);
    await updateTodoMutation.mutateAsync({ id, ...data });
    navigate('/app');
  };

  if (todoQuery.isLoading) return <Loading />;

  return (
    <Grid gap={4} display="flex" flexDir="column">
      <GridItem h="16">
        <Controller
          name="content"
          control={control}
          render={({ field: { onChange } }) => (
            <Input
              value={getValues('content')}
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
          isLoading={isSubmitting || updateTodoMutation.isLoading}
          isDisabled={!!errors.content?.message}
          type="submit"
          onClick={handleSubmit(handleUpdateTodo)}
        >
          Güncelle
        </Button>
      </GridItem>
    </Grid>
  );
};
