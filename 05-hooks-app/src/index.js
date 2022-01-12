import React from "react";
import reactDOM from "react-dom";
import { MemoHook } from "./components/06-memos/MemoHook";

const app = document.querySelector('#root');

reactDOM.render(<MemoHook />, app);