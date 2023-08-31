import React from 'react';
import useMainScreenViewController from './main-screen-view-controller';
import PreAuthNavigator from '@navigators/pre-auth-navigator';
import PostAuthNavigator from '@navigators/post-auth-navigator';


const MainScreen = () => {
  const {isLoggedIn} = useMainScreenViewController();


  return (
      isLoggedIn ? <PostAuthNavigator /> : <PreAuthNavigator />
  );
};

export default MainScreen;
