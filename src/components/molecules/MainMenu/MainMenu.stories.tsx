import type { Meta, StoryObj } from "@storybook/react";
import MainMenu from "./MainMenu";
import MenuItem from "../../atoms/MenuItem/MenuItem";

const meta: Meta<typeof MainMenu> = {
    title: "Atoms/MainMenu",
    component: MainMenu,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainMenu>;

const TEXTARRAY = ["First Option", "Second Option", "...More"];
export const Primary: Story = {
    args: {
        open: true,
        handleClose: () => console.log("Menu Item Click"),
        children: TEXTARRAY.map((text) => (
            <MenuItem
                key={text}
                text={text}
                handleClick={() => console.log("MenuItem")}
            />
        )),
    },
};
