import Header from "./components/Header";
import Button from "./components/Button";
import { Image } from "./components/image";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Button lable="Register" />
      <Button lable="Login" />
      <Image />
    </div>
  );
}

export default App;
