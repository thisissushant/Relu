import Header from "./Header";
import LeftNavbar from "./LeftNavbar";
import SocialCard from "./SocialCard";
import RightMenu from "./RightMenu";
import SampleImage from "../assets/pexels-humphrey-muleba-2045248.png";
import Avatar1 from "../assets/pexels-fiona-art-5022849.png";
import Avatar2 from "../assets/pexels-fiona-art-5022849.png";
import Avatar3 from "../assets/pexels-fiona-art-5022849.png";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <LeftNavbar />
        <main className="flex-1 p-6 overflow-y-auto h-screen">
          <div className="max-w-3xl mx-auto space-y-6">
            <SocialCard
              name="John Doe"
              username="johndoe"
              avatarSrc={Avatar1}
              text="This is a sample post with a longer text. It demonstrates how the 'Read More' functionality works when the text exceeds the visible area. Click 'Read More' to expand the full text and see how it adapts to the card layout."
              imageSrc={SampleImage}
              likes={42}
              comments={13}
              shares={7}
            />
            <SocialCard
              name="Jane Smith"
              username="janesmith"
              avatarSrc={Avatar2}
              text="What a wonderful day to share some thoughts and engage with the world. Excited to connect with everyone!"
              imageSrc={Avatar2}
              likes={58}
              comments={20}
              shares={15}
            />
            <SocialCard
              name="Alice Johnson"
              username="alicej"
              avatarSrc={Avatar3}
              text="Here’s a glimpse of my latest adventure. Exploring new horizons and loving every moment!"
              imageSrc={SampleImage}
              likes={100}
              comments={50}
              shares={30}
            />
            <SocialCard
              name="Bob Williams"
              username="bobw"
              avatarSrc={Avatar1}
              text="Taking a moment to reflect and recharge. Grateful for all the little things in life."
              imageSrc={SampleImage}
              likes={36}
              comments={10}
              shares={5}
            />
          </div>
        </main>
        <RightMenu />
      </div>
    </div>
  );
}
