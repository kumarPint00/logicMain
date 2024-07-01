"use client";
import React from "react";
import Image from "next/image";

function Item({ item }: any) {
  return (
    <>
      <img src={item.image} alt={item.title} style={{width:"100%"}}/>
    </>
  );
}

export default Item;