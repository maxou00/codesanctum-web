export default function TermsOfUse() {
  return (
    <div className="container pt-[180px]">
      <div className="mt-8 flex min-h-[100vh] w-full max-w-[800px] flex-col items-start justify-start gap-2 text-body-color dark:text-white">
        <h1 className="head mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
          Terms Of Use
        </h1>
        <p className="mb-5 flex items-center text-lg font-light text-body-color">
          Welcome to CodeSanctum, a sanctuary for those seeking to learn and
          improve their coding skills. By accessing and using our website, you
          agree to comply with and be bound by the following terms and
          conditions of use. If you disagree with any part of these terms and
          conditions, please do not use our website.
        </p>
        <ol>
          <li className="mb-5 flex items-center text-lg font-light text-body-color">
            The content on CodeSanctum is provided for educational and
            informational purposes only. We make no guarantees about the
            accuracy, completeness, or suitability of the information and
            materials found on our website. Any reliance you place on such
            information is strictly at your own risk.
          </li>
          <li className="mb-5 flex items-center text-lg font-light text-body-color">
            We reserve the right to modify, suspend, or discontinue any part of
            our website at any time without notice. We also reserve the right to
            change these terms and conditions of use at any time, so please
            review them periodically. Your continued use of our website after
            any changes indicates your acceptance of the modified terms.
          </li>
          <li className="mb-5 flex items-center text-lg font-light text-body-color">
            By using CodeSanctum, you agree to use our website and its content
            for lawful purposes only. You may not use our website to harass,
            abuse, defame, or otherwise infringe upon the legal rights of
            others. You may not engage in any activity that could damage,
            disable, or impair our website or interfere with any other user’s
            ability to access or use our website.
          </li>
          <li className="mb-5 flex items-center text-lg font-light text-body-color">
            Limitation of Liability: CodeSanctum and its affiliates shall not be
            liable for any direct, indirect, incidental, special, or
            consequential damages arising out of or in connection with your use
            of the site.
          </li>
          <li className="mb-5 flex items-center text-lg font-light text-body-color">
            Governing Law and Jurisdiction: These Terms of Use are governed by
            and construed in accordance with the laws of the jurisdiction in
            which CodeSanctum operates.
          </li>
        </ol>
      </div>
    </div>
  );
}
