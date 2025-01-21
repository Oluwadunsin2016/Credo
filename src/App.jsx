import {Routes,Route} from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import Home from './pages/Home'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
// import MultiStepForm from './pages/MultiStepForm'
// import AntDForm from './pages/AntDForm'

const App = () => {
  return (
    <Routes>
    <Route element={<AuthLayout/>}>
    <Route path='/sign-up' element={<SignUpForm/>}/>
    <Route path='/sign-in' element={<SignInForm/>}/>
    {/* <Route path='/multi' element={<AntDForm/>}/> */}
    {/* <Route path='/multi' element={<MultiStepForm/>}/> */}
    </Route>
    <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}/>
    </Route>
    </Routes>
  )
}

export default App