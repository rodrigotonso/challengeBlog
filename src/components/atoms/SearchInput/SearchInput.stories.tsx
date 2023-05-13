import type { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
    title: "Atoms/SearchInput",
    component: SearchInput,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

const options = ['Option1','Option2','Option3','Option4','Option5','Option6','Option7','Option8','Option9']
export const Primary: Story = {
    args: {
        options: options,
        handleChange: (value)=>console.log(value)
    },
};
