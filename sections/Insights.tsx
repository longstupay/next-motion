"use client";

import { InsightCard } from "@/components";
import React from "react";

export const insights = [
    {
      imgUrl: '/planet-06.png',
      title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
      subtitle:
          'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
    },
    {
      imgUrl: '/planet-07.png',
      title: '7 tips to easily master the madness of the Metaverse',
      subtitle:
          'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
    },
    {
      imgUrl: '/planet-08.png',
      title: 'With one platform you can explore the whole world virtually',
      subtitle:
          'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
    },
  ];


function Insights() {
  return (
    <section className="min-h-[320px] md:mx-16">
      <div className="mx-auto">
        <p className="text-center py-4 text-gray-100">| Insight</p>
        <p className="text-5xl md:px-40 leading-relaxed md:mx-16 mx-4 px-8 font-extrabold text-white text-center py-4">
          Insight about metaverse
        </p>
      </div>
      {/* img list */}
      <div className="flex flex-col md:px-16 space-y-4 md:space-y-16">
        {insights.map((insight, index) => (
            <InsightCard {...insight} key={index} index={index+1} />
        ))}
      </div>
    </section>
  );
}

export default Insights;
