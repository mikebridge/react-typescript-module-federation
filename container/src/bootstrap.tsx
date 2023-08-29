import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
// import { stopReportingRuntimeErrors } from 'react-error-overlay';

const container = document.getElementById('root');

// if (process.env.NODE_ENV === "development") {
//   stopReportingRuntimeErrors(); // disables error overlays
// }
//

const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
