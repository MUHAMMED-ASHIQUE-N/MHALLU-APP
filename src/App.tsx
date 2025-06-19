
import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes';
import { UserAuthProvider } from './context/user/userAuthContext';

interface IAppProps {
}

const App: React.FC<IAppProps> = (props) => {
  return (
    <UserAuthProvider>
    <RouterProvider router={router}/>
    </UserAuthProvider>
  )
};

export default App;
