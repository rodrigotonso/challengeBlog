import type { Meta, StoryObj } from "@storybook/react";
import ImageHero from "./ImageHero";

const meta: Meta<typeof ImageHero> = {
    title: "Atoms/ImageHero",
    component: ImageHero,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ImageHero>;

export const Primary: Story = {
    args: {
        src: "https://cnnespanol.cnn.com/wp-content/uploads/2023/03/canguros-australia-sacrificio-1.jpg?quality=100&strip=info&w=1024",
    },
};
