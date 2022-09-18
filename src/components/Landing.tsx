import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Loading } from './Loading';

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/app');
    }, 500);
  }, []);

  return (
    <>
      <Loading />
    </>
  );
};
