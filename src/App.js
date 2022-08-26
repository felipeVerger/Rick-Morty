import { Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import UserContextProvider from './context/UserContext'
import Character from './components/Character/Character'

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/character/:id' element={<Character/>}/>
        </Routes>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
