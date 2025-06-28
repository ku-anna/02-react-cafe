import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { useState } from "react";
import { Votes, VoteType } from "../../Types/votes";

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}
