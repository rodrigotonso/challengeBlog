import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
    title: "Atoms/Logo",
    component: Logo,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Primary: Story = {
    args: {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8eE91Ss8qONGCv_dORk6KQc8eV_0hJ3I8Bg&usqp=CAU",
    },
};
