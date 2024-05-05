import { HeaderContainer } from "./HeaderContainer";

import type { StoryObj, Meta } from "@storybook/react";

export default {
  component: HeaderContainer,
  parameters: {
    description: {
      component: "ヘッダー",
    },
    source: {
      code: "<HeaderContainer />",
    },
  },
} as Meta<typeof HeaderContainer>;

export const Template: StoryObj<typeof HeaderContainer> = {};
