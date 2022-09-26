import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "tw-elements";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
    },
  },
});
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
);
