"use client";

import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("@/components/SelectGraph"), { ssr: false });

export default function Page() {
  const dataFormatter = (number: number) =>
    `${Intl.NumberFormat("us").format(number).toString()}%`;

  return (
    <div>
      <NoSSR />
    </div>
  );
}
