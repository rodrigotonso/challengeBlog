import type { Meta, StoryObj } from "@storybook/react";
import MainMenu from "./MainMenu";

const meta: Meta<typeof MainMenu> = {
    title: "Molecules/MainMenu",
    component: MainMenu,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainMenu>;

const Options = [
    { text: "first", handleClick: () => console.log("first") },
    { text: "second", handleClick: () => console.log("second") },
    { text: "third", handleClick: () => console.log("third") },
];
export const Primary: Story = {
    args: { options: Options },
};
