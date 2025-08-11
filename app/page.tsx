import LeftSideImgArt from "@/components/article/LeftSideImgArt";
import RightSideImgArt from "@/components/article/RightSideImgArt";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import RightArrowBtn from "@/components/RightArrowBtn";
import Testimonials from "@/components/Testimonials";
import { CardProps } from "@/types/CardProps";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cardData: CardProps[] = [
    {
      title: "Free",
      price: "0",
      idea: "Capture ideas and find them quickly",
      type: "light",
      goalsArray: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      title: "Personal",
      price: "11.99",
      idea: "Keep home and family on track",
      type: "dark",
      goalsArray: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
    {
      title: "Organization",
      price: "49.99",
      idea: "Capture ideas and find them quickly",
      type: "light",
      goalsArray: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks",
      ],
    },
  ];
  const sponsers = [
    {
      img: "/assets/apple-black-logo.svg",
      alt: "apple logo",
      width: 55,
    },
    {
      img: "/assets/microsoft.svg",
      alt: "microsoft logo",
      width: 287,
    },
    {
      img: "/assets/FullSlack.svg",
      alt: "slack logo",
      width: 280,
    },
    {
      img: "/assets/Google.svg",
      alt: "google logo",
      width: 211,
    },
  ];
  return (
    <div className="flex min-h-screen flex-col ">
      <section className=" h-[870px] md:h-[1117px] lg:h-[733px] xl-[h-750px] 2xl:h-[921px] flex bg-[url('/assets/Element.png')] bg-no-repeat  bg-center flex-col  mainSection bg-brand">
        <header className="h-[92px]">
          <Navbar />
        </header>
        <main className="flex flex-col lg:flex-row items-center h-full justify-between mainContainer gap-5 lg:gap-0 ">
          <div className="flex flex-col gap-10">
            <h2 className="text-6xl font-bold text-white">
              Get More Done with
              <br />
              whitepace
            </h2>
            <p className="text-white">
              Project management software that enables your teams to
              collaborate, plan, analyze <br /> and manage everyday tasks
            </p>
            <div className="px-[20px] py-4 text-white cursor-pointer w-fit bg-brand-100 rounded-lg flex justify-center items-center">
              Try Whitepace free
              <Image
                src={`/assets/Right arrow icon.svg`}
                alt="right Arrow"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className="2xl:w-[825px] 2xl:h-[550px] xl:w-[685px] xl:h-[457px] lg:w-[526px] lg:h-[350px] md:w-[551px] md:h-[367px] w-[286px] h-[191px]">
            <Image
              src={"https://placehold.co/825x550/png"}
              alt="image"
              width={825}
              height={550}
            />
          </div>
        </main>
      </section>
      <section className="lg:h-[1588px] md:h-[1798px] h-[1587px] bg-white mainSection">
        <main className="mainContainer">
          <RightSideImgArt
            title="Project || Management"
            paragraph="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
            btnTitle="Get Started"
            image=""
            color="black"
          />
          <LeftSideImgArt
            title="Work together"
            btnTitle="Try it now"
            image="/assets/Work Together Image.svg"
            paragraph="With whitepace, share your notes with your colleagues and collaborate on them.
            You can also publish a note to the internet and share the URL with others."
            color="black"
          />
        </main>
      </section>
      <section className="h-[810px] md:h-[916px] lg:h-[759px] mainSection bg-brand">
        <main className="mainContainer">
          <RightSideImgArt
            title="Use as Extension"
            btnTitle="Let’s Go"
            image=""
            paragraph="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
            color="white"
          />
        </main>
      </section>
      <section className="2xl:h-[812px] xl:h-[780px] lg:h-[678px] md:h-[1010px] h-[860px] mainSection">
        <main className="mainContainer">
          <LeftSideImgArt
            image=""
            btnTitle="Let’s Go"
            color="black"
            paragraph="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
            title="Customise it to || your needs"
          />
        </main>
      </section>
      <section className="mainSection">
        <main className="mainContainer flex flex-col gap-5 items-center">
          <h2 className="text-6xl font-bold text-black">Choose Your Plan</h2>
          <p className="max-w-[980px] text-black">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for
            you.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
            {cardData.map((item, idx) => {
              return (
                <div key={idx}>
                  <Card
                    goalsArray={item.goalsArray}
                    title={item.title}
                    idea={item.idea}
                    price={item.price}
                    type={item.type}
                  />
                </div>
              );
            })}
          </div>
        </main>
      </section>
      <section className="mainSection xl:h-[574px] lg:h-[671px] md:h-[673px] h-[766px] bg-brand bg-[url('/assets/BACKGROUND.png')] bg-no-repeat">
        <main className="flex flex-col justify-center items-center h-full gap-8">
          <h2 className="font-bold text-6xl text-white">
            Your work, everywhere you are
          </h2>
          <p className="max-w-[1000px] text-white">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <RightArrowBtn btnTitle="Try Taskey" />
        </main>
      </section>
      <section className="mainSection xl:h-[662px] lg:h-[624px] md:h-[965px] h-[831px]">
        <main className="mainContainer">
          <RightSideImgArt
            title="100% your data"
            btnTitle="Read more"
            color="black"
            image="/assets/100Data.svg"
            paragraph="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
          />
        </main>
      </section>
      <section className="mainSection xl:h-[538px] lg:h-[528px] md:h-[1015px] h-[813px]">
        <main className="mainContainer flex flex-col gap-[100px] h-full items-center">
          <h2 className="text-6xl font-bold text-black">Our sponsors</h2>

          <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-8 items-center w-full justify-between">
            {sponsers.map((sponser, idx) => {
              return (
                <Image
                  src={sponser.img}
                  alt={sponser.alt}
                  key={idx}
                  width={sponser.width}
                  height={70}
                />
              );
            })}
          </div>
        </main>
      </section>
      <section className="mainSection xl:h-[750px] lg:h-[825px] md:h-[1109px] h-[927px] bg-brand bg-[url('/assets/Element.png')] ">
        <main className="mainContainer">
          <LeftSideImgArt
            title="Work with Your || Favorite Apps Using || whitepace"
            paragraph="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
            image="/assets/Apps.svg"
            btnTitle="Read more"
            color="white"
          />
        </main>
      </section>
      <section className="mainSection xl:h-[995px] lg:h-[1057px] md:h-[932px] sm:h-[894px]">
        <main className="mainContainer grid grid-cols-1 md:grid-cols-3 overflow-x-hidden gap-8">
          <Testimonials type="dark" />
          <Testimonials type="light" />
          <Testimonials type="light" />
        </main>
      </section>
      <Footer/>
    </div>
  );
}
