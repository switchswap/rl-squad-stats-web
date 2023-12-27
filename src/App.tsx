import { Route, Router } from "@solidjs/router";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { MatchHistoryPage } from "./pages/MatchHistoryPage";

function App() {
  return (
    <div class="flex flex-col h-full">
      <NavBar />
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/history" component={MatchHistoryPage} />
        <Route path="*404" component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
