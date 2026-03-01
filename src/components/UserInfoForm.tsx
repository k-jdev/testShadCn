import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  RiMoreLine,
  RiFileLine,
  RiFolderLine,
  RiHistoryLine,
  RiSaveLine,
  RiShareForwardLine,
  RiLayoutLeftLine,
  RiLayoutBottomLine,
  RiPaletteLine,
  RiQuestionLine,
  RiBookOpenLine,
  RiLogoutBoxLine,
} from "@remixicon/react";

export function UserInfoForm() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">
          User Information
        </CardTitle>
        <CardDescription>Please fill in your details below</CardDescription>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <RiMoreLine className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>File</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <RiFileLine />
                  New File
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RiFolderLine />
                  New Folder
                  <DropdownMenuShortcut>⇧⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <RiHistoryLine />
                    Open Recent
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Project 1</DropdownMenuItem>
                    <DropdownMenuItem>Project 2</DropdownMenuItem>
                    <DropdownMenuItem>Project 3</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  <RiSaveLine />
                  Save
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <RiShareForwardLine />
                  Export
                  <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>View</DropdownMenuLabel>
              <DropdownMenuGroup>
                <DropdownMenuCheckboxItem checked>
                  <RiLayoutLeftLine />
                  Show Sidebar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <RiLayoutBottomLine />
                  Show Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <RiPaletteLine />
                    Theme
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Light</DropdownMenuItem>
                    <DropdownMenuItem>Dark</DropdownMenuItem>
                    <DropdownMenuItem>System</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <RiQuestionLine />
                Help & Support
              </DropdownMenuItem>
              <DropdownMenuItem>
                <RiBookOpenLine />
                Documentation
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <RiLogoutBoxLine />
                Sign Out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-semibold">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role" className="font-semibold">
              Role
            </Label>
            <Select>
              <SelectTrigger id="role" className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent position="popper" side="bottom">
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="framework" className="font-semibold">
            Framework
          </Label>
          <Select>
            <SelectTrigger id="framework" className="w-full">
              <SelectValue placeholder="Select a framework" />
            </SelectTrigger>
            <SelectContent position="popper" side="bottom">
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="sveltekit">SvelteKit</SelectItem>
              <SelectItem value="nuxt">Nuxt.js</SelectItem>
              <SelectItem value="remix">Remix</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="comments" className="font-semibold">
            Comments
          </Label>
          <Textarea id="comments" placeholder="Add any additional comments" />
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Button>Submit</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
