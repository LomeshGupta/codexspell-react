// App.js
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import SolutionsPage from "./Pages/Solutions";
import Blogs from "./Pages/Blogs";
import PageNotFound from "./Components/NotFound";
import OverView from "./Pages/OverviewPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Navbar /> */}
          <ScrollToTop />
        </Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<OverView />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/solutions/:id" element={<SolutionsPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
