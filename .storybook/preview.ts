import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "defaultBackground",
      values: [
        { name: "defaultBackground", value: "#ffffff" },
        { name: "dark", value: "#333333" },
        { name: "light pink", value: "#ffcccb" },
      ],
    },
  },
};

export default preview;
