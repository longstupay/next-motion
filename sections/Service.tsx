"use client";

import { Card } from "@/components";
import React from "react";

function Service() {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-8">
      <div className="space-y-4">
        <span className="text-green-400 font-bold">OUR SERVICES</span>
        <h2 className="text-3xl font-extrabold leading-relaxed">
          Save Time Managing Social Media
          <br />
          For Your Business.
        </h2>
      </div>
      {/* Card list */}
      <div>
        <Card />
      </div>
    </section>
  );
}

export default Service;
