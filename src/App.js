import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Sidebar, Navbar, Footer, ScrollToTop } from "./components";
import Pages from "./pages";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Sidebar isOpen={isOpen} toggleHamburger={toggleHamburger} />
        <Navbar toggleHamburger={toggleHamburger} />

        <Switch>
          <Route path="/" exact component={Pages} />
        </Switch>
      </Router>

      <ScrollToTop />
      <Footer />
    </>
  );
}
