import "./App.css";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoutes from "./Routes/PublicRoutes";
import { useSelector } from "react-redux";
import { State } from "./Redux";

function App() {
  const value = useSelector((state: State) => state.auth.isAuthenticated);
  console.log(value);

  return (
    <div className="App">
      {value ? <PrivateRoute /> : <PublicRoutes />}
      
    </div>
  );
}

export default App;
