
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routs/Routs/Routs';

function App() {
  return (
    <div className=' max-w-[1200px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
