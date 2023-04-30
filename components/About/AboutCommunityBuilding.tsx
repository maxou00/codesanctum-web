/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutCommunityBuilding = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-row flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <h3 className="mb-4 font-heading text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[64px]">
                Community Building
              </h3>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                At CodeSanctum, we believe that community building is just as
                important as learning to code. Our community is made up of
                people from all over the world, who share a passion for coding
                and a desire to learn and grow together. We provide a safe and
                supportive space for our members to connect, share ideas, and
                collaborate on projects. We also organize regular events and
                workshops to help our members stay engaged and connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommunityBuilding;
