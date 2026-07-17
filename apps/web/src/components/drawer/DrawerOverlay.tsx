"use client";

import { motion, AnimatePresence } from "framer-motion";

interface Props {
  open: boolean;
  onClose(): void;
}

export default function DrawerOverlay({
  open,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="
          absolute
          inset-0
          z-40
          bg-black/20
          backdrop-blur-[2px]
        "
        />
      )}
    </AnimatePresence>
  );
}