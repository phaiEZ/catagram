"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [catid, setCatId] = useState(132312132);

  redirect(`/${catid}`);
  return <div>hello</div>;
}
