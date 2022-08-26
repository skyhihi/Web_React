//import logo from './logo.svg';
import "./App.css";
//import { Header, Content, Footer } from "./func-component";
import MsgBox from "./class-props";
function App() {
  return (
    <>
      <MsgBox 
      text="React & React Native" 
      color="red" 
      bgColor="#ccc" 
      fontSize="18pt" 
      border="solid 3px black" />
    </>
  );
}

export default App;
