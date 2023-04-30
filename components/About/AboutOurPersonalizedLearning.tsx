/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const AboutOurPersonalizedLearning = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-row flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 font-heading text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[64px]">
                  Personalized Learning
                </h3>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  We understand that everyone learns differently, and that's why
                  we provide a personalized learning experience to help you
                  tackle the learning curve at your own pace. Whether you're a
                  complete beginner or an experienced programmer, we offer
                  resources and guidance to help you achieve your goals. Our
                  mentors and peer-to-peer support groups are always available
                  to provide you with the help you need, and our online platform
                  provides access to a wide range of coding resources.
                </p>
              </div>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
};

export default AboutOurPersonalizedLearning;
