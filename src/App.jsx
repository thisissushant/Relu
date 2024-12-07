import {} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import SocialCard from "./components/social-card";
import Header from "./components/header";
import LeftNavbar from "./components/left-navbar";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <LeftNavbar />
          <main className="flex-1 p-6">
            <div className="max-w-3xl mx-auto">
              <SocialCard
                name="John Doe"
                username="johndoe"
                avatarSrc="/placeholder.svg?height=48&width=48"
                text="This is a sample post with a longer text. It demonstrates how the 'Read More' functionality works when the text exceeds the visible area. Click 'Read More' to expand the full text and see how it adapts to the card layout."
                imageSrc="/placeholder.svg?height=306&width=560"
                likes={42}
                comments={13}
                shares={7}
              />
            </div>
          </main>
        </div>
      </div>
    </>

    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //   </Routes>
    // </Router>
  );
};

export default App;
