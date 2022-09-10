import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/app');
    }, 500);
  }, []);

  return <>Yükleniyor...</>;
};
