export default function PrivacyPolicy() {
  return (
    <div className="container pt-[180px]">
      <div className="mt-8 flex w-full max-w-[800px] flex-col items-start justify-start gap-2 text-body-color dark:text-white min-h-[100vh]">
        <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl head">Privacy Policy</h1>
        <p className="mb-5 flex items-center text-lg font-light text-body-color">
          At CodeSanctum, we take your privacy seriously. We are committed to
          protecting the personal information you provide to us.
        </p>
        <p className="mb-5 flex items-center text-lg font-light text-body-color">
          When you visit our website or sign up for our services, we may collect
          your name, email address, and other information necessary to provide
          you with the best possible service. We use this information to
          personalize your experience, provide customer support, and send you
          occasional promotional emails.
        </p>
        <p className="mb-5 flex items-center text-lg font-light text-body-color">
          We never sell or rent your personal information to third parties. We
          may, however, share your information with trusted partners who assist
          us in operating our website, conducting our business, or providing you
          with our services.
        </p>
        <p className="mb-5 flex items-center text-lg font-light text-body-color">
          We take reasonable steps to protect your personal information from
          unauthorized access, use, or disclosure. However, no data transmission
          over the internet or wireless network can be guaranteed to be 100%
          secure.
        </p>
        <p className="mb-5 flex items-center text-lg font-light text-body-color">
          By using our website or services, you agree to the terms of this
          privacy policy. We reserve the right to modify this policy at any
          time, so please review it frequently. If you have any questions or
          concerns about our privacy policy,{" "}
          <a href="/contact" className="inline-block">please contact us</a>.
        </p>
      </div>
    </div>
  );
}
