import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Organisms/NavBar",
    component: NavBar,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

const Options = [
    { text: "first", handleClick: () => console.log("first") },
    { text: "second", handleClick: () => console.log("second") },
    { text: "third", handleClick: () => console.log("third") },
];
export const Primary: Story = {
    args: { options: Options },
};
