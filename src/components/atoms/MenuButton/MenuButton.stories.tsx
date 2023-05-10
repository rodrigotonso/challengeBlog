import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from "./MenuButton";

const meta: Meta<typeof MenuButton> = {
    title: "Atoms/MenuButton",
    component: MenuButton,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

export const Primary: Story = {
    args: {
        text: "About us",
        open: true,
        handleClick: ()=>console.log('Menu Item Click')
    },
};
