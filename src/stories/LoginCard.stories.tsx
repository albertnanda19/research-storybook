import type { Meta, StoryObj } from "@storybook/react";
import { LoginCard } from "./components/LoginCard";

const meta = {
  title: "SIR/LoginCard",
  component: LoginCard,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "ghost", "elevated"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    title: { control: "text" },
    description: { control: "text" },
  },
} satisfies Meta<typeof LoginCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultChildren = () => (
  <div>
    <p>Login form placeholder</p>
  </div>
);

export const Default: Story = {
  args: {
    title: "Haio",
    description: "Please enter your credentials to log in.",
    children: <DefaultChildren />,
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
  },
};

export const Elevated: Story = {
  args: {
    ...Default.args,
    variant: "elevated",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    ...Default.args,
    size: "xl",
  },
};

// Combination examples
export const OutlineSmall: Story = {
  args: {
    ...Default.args,
    variant: "outline",
    size: "sm",
  },
};

export const GhostLarge: Story = {
  args: {
    ...Default.args,
    variant: "ghost",
    size: "lg",
  },
};

export const ElevatedExtraLarge: Story = {
  args: {
    ...Default.args,
    variant: "elevated",
    size: "xl",
  },
};
