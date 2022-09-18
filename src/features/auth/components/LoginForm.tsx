import React from 'react';
import { Button, Input, Grid, GridItem } from '@chakra-ui/react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ErrorLabel } from '@/components';
import { useToast, setData } from '@/utils';
import { useUserStore } from '@/stores';

type LoginValues = {
  name: string;
};

const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required('Lütfen boş bırakmayınız')
    .min(3, '3 karakterden aşağı olamaz'),
}) as yup.SchemaOf<LoginValues>;

const defaultValues: LoginValues = {
  name: '',
};

export const LoginForm = () => {
  const { setUsername } = useUserStore();
  const toast = useToast();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = (data: LoginValues) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
        toast.showToast({ message: 'Giriş başarılı' });
        setUsername(data.name);
        setData(data.name);
      }, 1000);
    });
  };

  return (
    <Grid gap={4} display="flex" flexDir="column" alignItems="center" p={10}>
      <GridItem h="16">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              isInvalid={!!errors.name?.message}
              placeholder="Kullanıcı adı"
              variant="outline"
              onChange={onChange}
              errorBorderColor="red.300"
            />
          )}
        />
        <ErrorLabel message={errors.name?.message || ''} />
      </GridItem>
      <GridItem>
        <Button
          isLoading={isSubmitting}
          isDisabled={!!errors.name?.message}
          type="submit"
          onClick={handleSubmit(handleLogin)}
        >
          Giriş
        </Button>
      </GridItem>
    </Grid>
  );
};
