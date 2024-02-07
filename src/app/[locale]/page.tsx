"use client";

import { useRouter } from "@/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <span onClick={() => router.push("/test/12")}>
      Navigate to Test details page
    </span>
  );
}
