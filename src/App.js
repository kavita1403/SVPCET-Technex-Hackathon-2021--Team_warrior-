import './App.css';
import Home from './components/Home';
import Faq from './components/Faq';

// all available props

// import ThemedExample from './components/ChatBot';
import SimpleForm from './components/ChatBot';

function App() {
  return (
    <div>
   {/* < ThemedExample></ThemedExample> */}
   <Home></Home>
   <Faq></Faq>
    <SimpleForm></SimpleForm>
    </div>
  );
}

export default App;
