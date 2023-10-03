"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="relative -mt-[5.75rem] overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-light leading-7 text-slate-500">
              Last updated: October 3, 2023
            </p>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[40rem]">
            <p className="mb-4 text-sm font-light">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p className="mb-4 text-sm font-light">
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the{" "}
              <a
                href="https://www.termsfeed.com/privacy-policy-generator/"
                target="_blank"
              >
                Privacy Policy Generator
              </a>
              .
            </p>
            <h1 className="text-slate-800 dark:text-slate-100 text-3xl font-bold mt-10 mb-6">
              Interpretation and Definitions
            </h1>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Interpretation
            </h2>
            <p className="mb-4 text-sm font-light">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold pt-4 mb-4">
              Definitions
            </h2>
            <p className="mb-4 text-sm font-light">
              For the purposes of this Privacy Policy:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Account
                </strong>{" "}
                means a unique account created for You to access our Service or
                parts of our Service.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Affiliate
                </strong>{" "}
                means an entity that controls, is controlled by or is under
                common control with a party, where &quot;control&quot; means
                ownership of 50% or more of the shares, equity interest or other
                securities entitled to vote for election of directors or other
                managing authority.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Application
                </strong>{" "}
                refers to Squanch: Viewer, the chrome extension provided by the
                Company.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Company
                </strong>{" "}
                (referred to as either &quot;the Company&quot;, &quot;We&quot;,
                &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to
                Squanch.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Country
                </strong>{" "}
                refers to: Switzerland
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Device
                </strong>{" "}
                means any device that can access the Service such as a computer,
                a cellphone or a digital tablet.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Personal Data
                </strong>{" "}
                is any information that relates to an identified or identifiable
                individual.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Service
                </strong>{" "}
                refers to the Chrome Extension.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Service Provider
                </strong>{" "}
                means any natural or legal person who processes the data on
                behalf of the Company. It refers to third-party companies or
                individuals employed by the Company to facilitate the Service,
                to provide the Service on behalf of the Company, to perform
                services related to the Service or to assist the Company in
                analyzing how the Service is used.
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  Usage Data
                </strong>{" "}
                refers to data collected automatically, either generated by the
                use of the Service or from the Service infrastructure itself
                (for example, the duration of a page visit).
              </li>
              <li className="mb-2 text-sm font-light">
                <strong className="text-slate-800 dark:text-slate-200">
                  You
                </strong>{" "}
                means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </li>
            </ul>
            <h1 className="text-slate-800 dark:text-slate-100 text-3xl font-bold mt-10 mb-6">
              Collecting and Using Your Personal Data
            </h1>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Types of Data Collected
            </h2>
            <h3 className="text-slate-700 dark:text-slate-200 text-xl font-bold mb-2">
              Personal Data
            </h3>
            <p className="mb-4 text-sm font-light">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-4 text-sm font-light">
                First name and last name
              </li>
              <li className="mb-4 text-sm font-light">Email</li>
              <li className="mb-4 text-sm font-light">Usage Data</li>
            </ul>
            <h3 className="text-slate-700 dark:text-slate-200 text-xl font-bold mb-2">
              Usage Data
            </h3>
            <p className="mb-4 text-sm font-light">
              Usage Data is collected automatically when using the Service.
            </p>
            <p className="mb-4 text-sm font-light">
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </p>
            <p className="mb-4 text-sm font-light">
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </p>
            <p className="mb-4 text-sm font-light">
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </p>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Use of Your Personal Data
            </h2>
            <p className="mb-4 text-sm font-light">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-4 text-sm font-light">
                <strong>To provide and maintain our Service</strong>, including
                to monitor the usage of our Service.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>To manage Your Account:</strong> to manage Your
                registration as a user of the Service. The Personal Data You
                provide can give You access to different functionalities of the
                Service that are available to You as a registered user.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>For the performance of a contract:</strong> the
                development, compliance and undertaking of the purchase contract
                for the products, items or services You have purchased or of any
                other contract with Us through the Service.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>To contact You:</strong> To contact You by email,
                telephone calls, SMS, or other equivalent forms of electronic
                communication, such as a mobile application's push notifications
                regarding updates or informative communications related to the
                functionalities, products or contracted services, including the
                security updates, when necessary or reasonable for their
                implementation.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>To provide You</strong> with news, special offers and
                general information about other goods, services and events which
                we offer that are similar to those that you have already
                purchased or enquired about unless You have opted not to receive
                such information.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>To manage Your requests:</strong> To attend and manage
                Your requests to Us.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>For business transfers:</strong> We may use Your
                information to evaluate or conduct a merger, divestiture,
                restructuring, reorganization, dissolution, or other sale or
                transfer of some or all of Our assets, whether as a going
                concern or as part of bankruptcy, liquidation, or similar
                proceeding, in which Personal Data held by Us about our Service
                users is among the assets transferred.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>For other purposes</strong>: We may use Your information
                for other purposes, such as data analysis, identifying usage
                trends, determining the effectiveness of our promotional
                campaigns and to evaluate and improve our Service, products,
                services, marketing and your experience.
              </li>
            </ul>
            <p className="mb-4 text-sm font-light">
              We may share Your personal information in the following
              situations:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-4 text-sm font-light">
                <strong>With Service Providers:</strong> We may share Your
                personal information with Service Providers to monitor and
                analyze the use of our Service, to contact You.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>For business transfers:</strong> We may share or
                transfer Your personal information in connection with, or during
                negotiations of, any merger, sale of Company assets, financing,
                or acquisition of all or a portion of Our business to another
                company.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>With Affiliates:</strong> We may share Your information
                with Our affiliates, in which case we will require those
                affiliates to honor this Privacy Policy. Affiliates include Our
                parent company and any other subsidiaries, joint venture
                partners or other companies that We control or that are under
                common control with Us.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>With business partners:</strong> We may share Your
                information with Our business partners to offer You certain
                products, services or promotions.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>With other users:</strong> when You share personal
                information or otherwise interact in the public areas with other
                users, such information may be viewed by all users and may be
                publicly distributed outside.
              </li>
              <li className="mb-4 text-sm font-light">
                <strong>With Your consent</strong>: We may disclose Your
                personal information for any other purpose with Your consent.
              </li>
            </ul>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Retention of Your Personal Data
            </h2>
            <p className="mb-4 text-sm font-light">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p className="mb-4 text-sm font-light">
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Transfer of Your Personal Data
            </h2>
            <p className="mb-4 text-sm font-light">
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p className="mb-4 text-sm font-light">
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p className="mb-4 text-sm font-light">
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Delete Your Personal Data
            </h2>
            <p className="mb-4 text-sm font-light">
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </p>
            <p className="mb-4 text-sm font-light">
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </p>
            <p className="mb-4 text-sm font-light">
              You may update, amend, or delete Your information at any time by
              signing in to Your Account, if you have one, and visiting the
              account settings section that allows you to manage Your personal
              information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided
              to Us.
            </p>
            <p className="mb-4 text-sm font-light">
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </p>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Disclosure of Your Personal Data
            </h2>
            <h3>Business Transactions</h3>
            <p className="mb-4 text-sm font-light">
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </p>
            <h3>Law enforcement</h3>
            <p className="mb-4 text-sm font-light">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h3>Other legal requirements</h3>
            <p className="mb-4 text-sm font-light">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-4 text-sm font-light">
                Comply with a legal obligation
              </li>
              <li className="mb-4 text-sm font-light">
                Protect and defend the rights or property of the Company
              </li>
              <li className="mb-4 text-sm font-light">
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li className="mb-4 text-sm font-light">
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li className="mb-4 text-sm font-light">
                Protect against legal liability
              </li>
            </ul>
            <h2 className="text-slate-700 dark:text-slate-200 text-2xl font-bold mb-4">
              Security of Your Personal Data
            </h2>
            <p className="mb-4 text-sm font-light">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
            <h1 className="text-slate-800 dark:text-slate-100 text-3xl font-bold mt-10 mb-6">
              Links to Other Websites
            </h1>
            <p className="mb-4 text-sm font-light">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </p>
            <p className="mb-4 text-sm font-light">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
            <h1 className="text-slate-800 dark:text-slate-100 text-3xl font-bold mt-10 mb-6">
              Changes to this Privacy Policy
            </h1>
            <p className="mb-4 text-sm font-light">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="mb-4 text-sm font-light">
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p className="mb-4 text-sm font-light">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <h1 className="text-slate-800 dark:text-slate-100 text-3xl font-bold mt-10 mb-6">
              Contact Us
            </h1>
            <p className="mb-4 text-sm font-light">
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-4 text-sm font-light">
                By email: info@squanch.tv
              </li>
              <li className="mb-4 text-sm font-light">
                By visiting this page on our website:{" "}
                <a
                  href="https://www.squanch.tv/#contact"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  https://www.squanch.tv/#contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
