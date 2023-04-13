import React from "react";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { hydrateRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = hydrateRoot(domNode, <App />);

root.render(<App />);
