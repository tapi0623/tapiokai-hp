import type { Preview } from "@storybook/react";
import { Providers } from "../src/app/providers";

import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: (Story) => (
    <Providers>
      <Story />
    </Providers>
  ),
};

export default preview;
