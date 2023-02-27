import React from "react";

function WhatsNew() {
  return (
    <section className="min-h-[480px] md:mb-16">
      <div className="flex items-center justify-center gap-3 md:mx-16">
        {/* Text */}
        <div className="flex-1 min-h-[400px] md:px-8 px-0 mx-4">
          <p className="text-gray-100 pt-4">| Whats new?</p>
          <p className="text-6xl leading-relaxed text-white font-extrabold">
            What&lsquo;s new about Metaversus?
          </p>
          <div className="flex md:gap-24">
            <div className=" space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-gray-600 flex items-center justify-center">
                <img src="/vrpano.svg" alt="" />
              </div>
              <p className="text-2xl text-white">Title A new world</p>
              <p className="text-xl md:pr-24 text-white">
                we have the latest update with new world for you to try never
                mind
              </p>
            </div>
            <div className=" space-y-3">
              <div className="w-16 h-16 rounded-3xl bg-gray-600 flex items-center justify-center">
                <img src="/headset.svg" alt="" />
              </div>
              <p className="text-2xl text-white">More realistic</p>
              <p className="text-xl md:pr-24 text-white">
                Magna etiam tempor orci eu lobortis elementum nibh tellus
                molestie.
              </p>
            </div>
          </div>
        </div>
        {/* Img */}
        <div className="flex-[0.75] min-h-[400px] md:px-8 px-4 mx-4">
          <img
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default WhatsNew;
