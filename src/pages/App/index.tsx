import React from 'react';

import CommonRouter from './CommonRouter';
import {useUser} from '../../provider/AuthProvider';
import AuthRouter from './AuthRouter';

const HomeStack = () => {
  const {authState} = useUser();
  return authState.isLoggetIn ? <AuthRouter /> : <CommonRouter />;
};

export default HomeStack;
