"use client";

import { Modal } from "@/app/modal";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(true);

  return (
    <Modal title="Modal" open={open} onClose={() => setOpen((prev) => !prev)}>
      Modal content
    </Modal>
  );
}
