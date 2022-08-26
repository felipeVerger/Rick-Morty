import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import UserContextProvider from './context/UserContext'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
