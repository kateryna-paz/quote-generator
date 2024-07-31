import React from "react";
import Image from "next/image";

const FooterSection = () => {
  return (
    <section className="flex-1 flex flex-col items-center gap-4">
      <div className="my-2">
        <a
          href="/terms-of-service"
          className="mx-4 text-blue-500 hover:text-blue-700"
        >
          Terms of Service
        </a>
        <a
          href="/privacy-policy"
          className="mx-4 text-blue-500 hover:text-blue-700"
        >
          Privacy Policy
        </a>
      </div>
      <div className="mb-4 flex gap-4">
        <a href="https://www.facebook.com" target="_blank">
          <Image
            src="/icons/facebook.svg"
            alt="Facebook"
            width={29}
            height={29}
          />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <Image
            src="/icons/youtube.png"
            alt="Youtube"
            width={29}
            height={29}
          />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <Image
            src="/icons/instagram.webp"
            alt="Instagram"
            width={29}
            height={29}
          />
        </a>
      </div>
      <div className="text-sm text-center  text-gray-600">
        © 2024 Quote Generator. All rights reserved.
      </div>
    </section>
  );
};

export default FooterSection;
