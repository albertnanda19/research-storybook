import type { Meta, StoryObj } from "@storybook/react";
import ComponentTable from "./components/ComponentTable";

const meta = {
  title: "SIR/ComponentTable",
  component: ComponentTable,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "bordered", "striped", "hoverable"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "xl"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "accent"],
    },
    rounded: {
      control: "boolean",
    },
    headerColor: {
      control: "select",
      options: ["default", "yellow"],
    },
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "360px",
            height: "640px",
          },
          type: "mobile",
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
          type: "tablet",
        },
        desktop: {
          name: "Desktop",
          styles: {
            width: "1024px",
            height: "768px",
          },
          type: "desktop",
        },
      },
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof ComponentTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  ["Eliza Paath", "30", "Los Santos"],
  ["Xave Senduk", "25", "Los Angeles"],
  ["Mario Senduk", "35", "Dimana saja"],
];

const sampleHeaders = ["Name", "Age", "City"];

export const Default: Story = {
  args: {
    data: sampleData,
    headers: sampleHeaders,
  },
};

export const Bordered: Story = {
  args: {
    ...Default.args,
    variant: "bordered",
  },
};

export const Striped: Story = {
  args: {
    ...Default.args,
    variant: "striped",
  },
};

export const Hoverable: Story = {
  args: {
    ...Default.args,
    variant: "hoverable",
  },
};

export const SmallSize: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const PrimaryColor: Story = {
  args: {
    ...Default.args,
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  args: {
    ...Default.args,
    color: "secondary",
  },
};

export const AccentColor: Story = {
  args: {
    ...Default.args,
    color: "accent",
  },
};

export const Rounded: Story = {
  args: {
    ...Default.args,
    rounded: true,
  },
};

export const YellowHeader: Story = {
  args: {
    ...Default.args,
    headerColor: "yellow",
  },
};

export const ComplexExample: Story = {
  args: {
    variant: "striped",
    size: "lg",
    color: "primary",
    rounded: true,
    headerColor: "yellow",
    data: sampleData,
    headers: sampleHeaders,
  },
};
