import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MenuBar from "./components/MenuBar";
import { AuthProvider } from "./context/auth";
import AuthRoute from "./utils/AuthRoute";
import BookPage from "./components/Book/BookPage";
import BookShelf from "./components/Book/BookShelf";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <MenuBar />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
          <Route exact path="/book/detail/:id" component={BookPage} />
          <Route exact path="/book/" component={BookShelf} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
