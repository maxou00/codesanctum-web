import Image from "next/image";

const AboutOurPhilosophy = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
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
              <div className="mb-9">
                <h3 className="mb-4 font-heading text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[64px]">
                  Our philosophy
                </h3>
                <p className="text-base !leading-relaxed text-body-color md:text-lg">
                  At CodeSanctum, we believe that learning to code should be
                  accessible to everyone, regardless of their background or
                  experience level. We strive to create a welcoming and
                  inclusive environment where our members can learn, share
                  knowledge, and grow together. Our focus is not only on
                  teaching programming skills but also on developing
                  problem-solving skills and fostering creativity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOurPhilosophy;
