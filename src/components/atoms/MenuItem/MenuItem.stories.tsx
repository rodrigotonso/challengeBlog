import type { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";

const meta: Meta<typeof MenuItem> = {
    title: "Atoms/MenuItem",
    component: MenuItem,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Primary: Story = {
    args: {
        text: "About us",
        handleClick: ()=>console.log('Menu Item Click')
    },
};
