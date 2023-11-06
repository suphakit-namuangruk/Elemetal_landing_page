import React from "react";

function Testimonials() {
  return (
    <div className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Client Testimonials
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl">
            Explore the whole travel information in Thailand website and Planing
            to travel. Also Stories of place that you want to go.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Nice travel website !!!
              </h3>
              <p className="my-4">
                "I can't express how grateful I am for stumbling upon this
                travel website. It's like having a trusted travel companion
                that's packed with valuable insights and tips. The extensive
                coverage of destinations and the user-generated reviews make it
                an invaluable resource for planning my trips. It's a must-visit
                site for every traveler!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium">
                <div>Acara ACR</div>
                <div className="text-sm font-light text-gray-500">
                  Tourist from USA
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                I can got a best plan for travel
              </h3>
              <p className="my-4">
                "This travel website is a treasure trove of travel knowledge. It
                has saved me countless hours of research, and I've discovered
                incredible hidden gems thanks to their recommendations. The
                articles are well-written, and the photos are breathtaking. It's
                my travel bible, and I can't imagine embarking on a new journey
                without it."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium">
                <div>Emily Harrison</div>
                <div className="text-sm font-light text-gray-500">Student</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                I can learn story of Wat Pha Kew
              </h3>
              <p className="my-4">
                "I'm a frequent traveler, and I've used many travel websites,
                but this one stands out as exceptional. The website's layout is
                user-friendly, and the content is not only informative but also
                inspiring. It has helped me create unforgettable experiences by
                providing me with insider tips on unique destinations. I've
                recommended it to all my globetrotting friends🤯."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium">
                <div>Jese Leos</div>
                <div className="text-sm font-light text-gray-500">
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
              <h3 className="text-lg font-semibold text-gray-900">
                Best travel website ^^
              </h3>
              <p className="my-4">
                "This travel website is a game-changer for anyone passionate
                about exploring the world. It offers a wealth of information
                about destinations and activities, making it easy to plan a trip
                down to the last detail. The community of fellow travelers
                sharing their experiences and insights is invaluable. I've had
                some of my most memorable journeys thanks to this website."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium">
                <div>Sophia Turner</div>
                <div className="text-sm font-light text-gray-500">Traveler</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="text-center">
          <a
            href=""
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
          >
            Show more...
          </a>
        </div>
      </div>
      <hr className="w-[50%] h-1 mx-auto my-4 bg-gray-900 border-0 rounded md:my-10"></hr>
    </div>
  );
}
export default Testimonials;
