"use client";
import React, { useState } from "react";
import Hero from "./Hero";
import Product from "./Product";
import Navbar from "./Navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
    </div>
  );
}

export default page;
