const path = require("path");

const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
  ],
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
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    };
  },
};
