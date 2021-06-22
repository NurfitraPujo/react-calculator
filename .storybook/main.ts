const path = require("path");

import reactRefresh from "@vitejs/plugin-react-refresh";

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  core: {
    builder: "storybook-builder-vite",
  },
  typescript: {
    reactDocgen: false,
    reactDocgenTypescriptOptions: {
      propFilter: (prop) =>
        prop.parent !== undefined &&
        (!prop.parent.fileName.includes("node_modules") ||
          (prop.parent.fileName.includes("node_modules") &&
            prop.parent.fileName.includes("node_modules/@chakra-ui/") &&
            !prop.parent.fileName.includes(
              "node_modules/@chakra-ui/styled-system"
            ))),
    },
  },
};
