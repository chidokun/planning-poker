import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import RoomPage from "./room/RoomPage";

function Main() {
  return (
    <HashRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/room/:roomId" component={RoomPage} />
    </Switch>
    </HashRouter>
    
  );
}

export default Main;
