import Header from "./components/header";
import LeftNavbar from "./components/left-navbar";
import SocialCard from "./components/social-card";
import RightMenu from "./components/right-menu";
import SampleImage from "./assets/pexels-humphrey-muleba-2045248.png";
import Avtar from "./assets/pexels-antoni-shkraba-4442102.png";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <LeftNavbar />
        <main className="flex-1 p-6">
          <div className="max-w-3xl ml-32">
            <SocialCard
              name="John Doe"
              username="johndoe"
              avatarSrc={Avtar}
              text="This is a sample post with a longer text. It demonstrates how the 'Read More' functionality works when the text exceeds the visible area. Click 'Read More' to expand the full text and see how it adapts to the card layout."
              imageSrc={SampleImage}
              likes={42}
              comments={13}
              shares={7}
            />
          </div>
        </main>
        <RightMenu />
      </div>
    </div>
  );
}
