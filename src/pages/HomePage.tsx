import { Carousel } from "flowbite-react";
import covercarouselwnd from "@/assets/covercarouselwnd.png";
import growhubcovercarousel from "@/assets/growhubcovercarousel.png";
import huellitaspagelayout from "@/assets/huellitaspagelayout.png";

function HomePage() {
  console.log(covercarouselwnd, growhubcovercarousel, huellitaspagelayout);
  return (
    <div className="w-full bg-white text-black">
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to my web dev Portfolio</h1>
        <h2 className="text-lg mb-6 text-gray-600">This is a showcase of my web development projects and skills.</h2>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            I’m a new web developer with a strong foundation and a hunger to learn. These first projects represent not just what I can do today, but
            the potential I’m working hard to unlock.
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="h-70 sm:h-80 xl:h-96 2xl:h-120">
          <Carousel slide={true} slideInterval={2000}>
            <div className="flex w-full items-center justify-center">
              <img src={covercarouselwnd} alt="Project 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex w-full items-center justify-center">
              <img src={growhubcovercarousel} alt="Project 2" className="w-full h-full object-cover" />
            </div>
            <div className="flex w-full items-center justify-center">
              <img src={huellitaspagelayout} alt="Project 3" className="w-full h-full object-cover" />
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
