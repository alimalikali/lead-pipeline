import React from "react";
import logo from "../images/logomain.png";
import logoCompany from "../images/footlogo1.png";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex lg:flex-row flex-col justify-between mxsm:px-24  px-8 lg:space-y-0 space-y-10 ">
          {/* left */}
          <div>
            <div className="space-y-4">
              <img src={logo} alt="la" />
              <p className="mxsm:w-64 w-auto pr-3 text-zinc-400 text-sm font-medium  flex-wrap leading-normal">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting.
              </p>
              <img src={logoCompany} alt="la" className="pt-4" />
            </div>
          </div>
          {/* right */}
          <div className="grid grid-cols-2 gap-8 lg:space-y-0 space-y-4 sm:gap-7  lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-zinc-600 text-base font-bold  leading-loose ">
                Products
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 space-y-3 font-medium">
                <li className="">
                  <a href="#flowbitelink/" className="hover:underline">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Webchats
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Channels
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Contacts
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Inbox
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Text compaigns
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-0">
              <h2 className="mb-6 text-zinc-600 text-base font-bold  leading-loose">
                Resources
              </h2>
              <ul className="text-gray-500  space-y-3  font-medium">
                <li className="">
                  <a href="#flowbitelink/" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Google Reviews
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Online Reviews
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Contact Sales
                  </a>
                </li>
                <li>
                  <a href="#tailwindcsslink/" className="hover:underline">
                    Bussiness Messaging
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-zinc-600  leading-loosetext-zinc-600 text-base font-bold  leading-loose">
                Partners
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 space-y-3  font-medium">
                <li className="">
                  <a
                    href="#githublink/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Become one
                  </a>
                </li>
                <li className="">
                  <a
                    href="#githublink/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Hire an Expert
                  </a>
                </li>
                <li className="">
                  <a
                    href="#githublink/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Integrations
                  </a>
                </li>
                <li className="">
                  <a
                    href="#githublink/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Developer Portals
                  </a>
                </li>
                <li className="">
                  <a
                    href="#githublink/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-zinc-600 leading-loosetext-zinc-600 text-base font-bold  leading-loose">
                Company
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 space-y-3 font-medium">
                <li className="">
                  <a href="ali" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="ali" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="ali" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="ali" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="ali" className="hover:underline">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="ali" className="hover:underline">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* low foot */}
        <div>
          <hr className="mt-10 opacity-50 border-zinc-400 sm:mx-auto  " />
          <span className="block text-center  text-zinc-600 mxsm:text-base text-sm font-bold leading-loose py-7">
            © 2023{" "}
            LeadPipelyne Corp Inc. 2023
          </span>
        </div>
      </footer>
    </>
  );
}
