import React from "react";
import Button from "./subcomponents/button";
import { BlocksIcon } from "lucide-react";

export default function NavbarButton() {
  // TODO: switch to https://github.com/modrinth/code/blob/main/apps/app-frontend/src/components/ui/NavButton.vue
  return <Button transparent>
    <BlocksIcon/> Modlauncher
  </Button>;
}
