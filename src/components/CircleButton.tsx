import React from "react";
import handler from "../pages/api/hello";
import styles from "@/styles/components/CircleButton.module.css";

type PropsType = {
  children: React.ReactNode;
  label: string;
  handler: () => void;
};

const CircleButton = ({ children, label, handler }: PropsType) => {
  return (
    <button className={styles.Btn} onClick={handler}>
      <div className={styles.sign}>{children}</div>

      <div className={styles.text}>{label}</div>
    </button>
  );
};

export default CircleButton;
