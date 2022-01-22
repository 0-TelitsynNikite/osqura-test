import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs/Tabs';
import TestForm from './components/Form/TestForm/TestForm';
import RegistrationForm from './components/Form/RegistrationForm/RegistrationForm';
import EntryForm from './components/Form/EntryForm/EntryForm';


const App = () => {

  return (
    <div className='main'>
      <BrowserRouter>
        <Tabs/> 
        <Routes>
          <Route path="/form-1" exact element={<TestForm title={'Вход или регистрация'}/> } />
          <Route path="/form-2" element={<EntryForm title={'Вход'} password={true}/> } />
          <Route path="/form-3" element={<RegistrationForm title={'Регистрация'}/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
