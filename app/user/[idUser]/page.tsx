"use client";
import React from "react";

export default function page(props: any) {
  const { params } = props;
  return <div>Giá trị user : {params.idUser}</div>;
}
