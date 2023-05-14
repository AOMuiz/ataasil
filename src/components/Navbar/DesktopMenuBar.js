import React from "react";
import * as Menubar from "@radix-ui/react-menubar";
import Icon from "../Icon";

const DesktopMenuBar = () => {
  return (
    <div className="absolute left-0 right-0 top-full z-10 h-full w-max bg-white">
      <Menubar.Root className="flex flex-col">
        <Menubar.Menu className="flex gap-2 p-4">
          <Menubar.Trigger className="space-y-3 text-lg">File</Menubar.Trigger>
          <Menubar.Portal className="w-max  bg-black p-2">
            <Menubar.Content
              side="left"
              className="MenubarContent w-max bg-black p-2 text-white"
            >
              <Menubar.Item className="MenubarItem flex gap-2">
                New Tab <div className="RightSlot">⌘ T</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem flex gap-2">
                New Window <div className="RightSlot">⌘ N</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem flex gap-2" disabled>
                New Incognito Window
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  Share
                  <div className="RightSlot">
                    <Icon id={"less-than"} className="cursor-pointer" />
                  </div>
                </Menubar.SubTrigger>
                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Email Link
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Messages
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Notes
                    </Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem flex gap-2">
                Print… <div className="RightSlot">⌘ P</div>
              </Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>

        <Menubar.Menu className="flex">
          <Menubar.Trigger className="space-y-3 text-lg">Edit</Menubar.Trigger>
          <Menubar.Portal>
            <Menubar.Content side="left" className="bg-black p-2 text-white">
              <Menubar.Item className="MenubarItem flex gap-2">
                Undo <div className="RightSlot">⌘ Z</div>
              </Menubar.Item>
              <Menubar.Item className="MenubarItem flex gap-2">
                Redo <div className="RightSlot">⇧ ⌘ Z</div>
              </Menubar.Item>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Sub>
                <Menubar.SubTrigger className="MenubarSubTrigger">
                  Find
                  <div className="RightSlot">
                    <Icon id={"less-than"} className="cursor-pointer" />
                  </div>
                </Menubar.SubTrigger>

                <Menubar.Portal>
                  <Menubar.SubContent
                    className="MenubarSubContent"
                    alignOffset={-5}
                  >
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Search the web…
                    </Menubar.Item>
                    <Menubar.Separator className="MenubarSeparator" />
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Find…
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Find Next
                    </Menubar.Item>
                    <Menubar.Item className="MenubarItem flex gap-2">
                      Find Previous
                    </Menubar.Item>
                  </Menubar.SubContent>
                </Menubar.Portal>
              </Menubar.Sub>
              <Menubar.Separator className="MenubarSeparator" />
              <Menubar.Item className="MenubarItem">Cut</Menubar.Item>
              <Menubar.Item className="MenubarItem">Copy</Menubar.Item>
              <Menubar.Item className="MenubarItem">Paste</Menubar.Item>
            </Menubar.Content>
          </Menubar.Portal>
        </Menubar.Menu>
      </Menubar.Root>
    </div>
  );
};

export default DesktopMenuBar;
