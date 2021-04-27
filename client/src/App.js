import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header.components";
import FindRecipesPage from "./components/FindRecipePage";
import FavoritesPage from "./components/FavoritesPage";
import { NotFoundPage } from "./components/NotFoundPage.components";
import "./App.css";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/recipes" exact component={FindRecipesPage} />
          <Route path="/favorites" exact component={FavoritesPage} />
          <Route path="/" component={NotFoundPage} />
        </Switch>
      </Router>
    </>
  );
};
