import React from "react";

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

function Footer() {
  return (
    <footer className="md:px-32 pb-8 flex flex-col relative">
       <div className="footer-gradient" />
      <div className="flex py-8 justify-between md:pr-16">
        <p className="text-5xl text-white">Enter the Metaverse</p>
        <button className="flex items-center py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] h-fit text-white">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          Enter the Metaverse
        </button>
      </div>
      <div className="flex flex-col pr-16">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            METAVERUS
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
