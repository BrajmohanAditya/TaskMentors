import React, { useEffect } from 'react';
import MainRoutes from './Routes/MainRoutes';
import { GetUserHook } from './hooks/User.hook';
import { useUserStore } from './store/user.store';

function App() {
  const { data, isLoading, isError } = GetUserHook();
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  // Jab API se data aayega, ye usko permanently Zustand mein daal dega
  useEffect(() => {
    if (data?.user) {
      setUser(data.user);
    } else if (isError) {
      clearUser();
    }
  }, [data, isError, setUser, clearUser]);



  return (
    <>
      <div><MainRoutes /></div>
    </>
  );
}

export default App;
