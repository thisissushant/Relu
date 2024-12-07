import Header from "./components/header";
import LeftNavbar from "./components/left-navbar";
import SocialCard from "./components/social-card";
import RightMenu from "./components/right-menu";

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
              avatarSrc="/placeholder.svg?height=48&width=48"
              text="This is a sample post with a longer text. It demonstrates how the 'Read More' functionality works when the text exceeds the visible area. Click 'Read More' to expand the full text and see how it adapts to the card layout."
              imageSrc="/placeholder.svg?height=306&width=560"
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
