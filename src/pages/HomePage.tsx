import { Carousel } from "flowbite-react";

function HomePage() {
  return (
    <div className="w-full bg-white text-black">
      <header className="text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to my web dev Portfolio</h1>
        <h3 className="text-lg mb-6 text-gray-600">This is a showcase of my web development projects and skills.</h3>

        <div className="max-w-2xl mx-auto">
          <p className="text-lg leading-relaxed">
            I’m a new web developer with a strong foundation and a hunger to learn. These first projects represent not just what I can do today, but
            the potential I’m working hard to unlock.
          </p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <div className="h-64 sm:h-80 md:h-96 xl:h-[500px]">
          <Carousel slideInterval={5000}>
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="Project 1" className="object-cover h-full w-full" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="Project 2" className="object-cover h-full w-full" />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="Project 3" className="object-cover h-full w-full" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
