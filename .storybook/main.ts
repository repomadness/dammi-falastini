import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    //"@storybook/addon-a11y", causing build issues
    "@storybook/addon-vitest",
    "storybook-addon-test-codegen"
  ],
  core: {
    builder: {name: '@storybook/builder-vite', 
      options: {}
    }
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};

export default config; 