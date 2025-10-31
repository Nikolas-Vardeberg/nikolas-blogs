import {
  BoldIcon,
  ItalicIcon,
  Redo,
  TextAlignCenter,
  UnderlineIcon,
  Undo,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ButtonGroup } from "../ui/button-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useEditorStore } from "@/store/use-editor-store";
import clsx from "clsx";

const ActionButtonGroups = () => {
  const { editor } = useEditorStore();

  const actions = [
    {
      label: "Redo",
      icon: Redo,
      onClick: () => editor?.chain().focus().undo().run(),
    },
    {
      label: "Undo",
      icon: Undo,
      onClick: () => editor?.chain().focus().redo().run(),
    },
  ];

  return (
    <ButtonGroup>
      {actions?.map(({ icon: Icon, label, onClick }) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" onClick={onClick}>
              <Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};

const TextStyleButtonGroup = () => {
  const { editor } = useEditorStore();

  const styles = [
    {
      label: "Bold",
      icon: BoldIcon,
      isActive: editor?.isActive("bold"),
      onClick: () => editor?.chain().focus().toggleBold().run(),
    },
    {
      label: "Italic",
      icon: ItalicIcon,
      isActive: editor?.isActive("italic"),
      onClick: () => editor?.chain().focus().toggleItalic().run(),
    },
    {
      label: "Underline",
      icon: UnderlineIcon,
      isActive: editor?.isActive("underline"),
      onClick: () => editor?.chain().focus().toggleUnderline().run(),
    },
  ];

  return (
    <ButtonGroup>
      {styles?.map(({ icon: Icon, label, onClick, isActive }) => (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onClick}
              variant="ghost"
              className={clsx(
                isActive && "rounded-none border-b-2 border-white"
              )}
            >
              <Icon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>{label}</TooltipContent>
        </Tooltip>
      ))}
    </ButtonGroup>
  );
};

const HeadingSizeButton = () => {
  const { editor } = useEditorStore();

  const headings = [
    { label: "Normal text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
    { label: "Heading 5", value: 5, fontSize: "16px" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <TextAlignCenter /> Paragraph
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {headings?.map((heading) => (
          <DropdownMenuItem
            key={heading.value}
            style={{ fontSize: heading.fontSize }}
          >
            {heading.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function Toolbar() {
  return (
    <div className="p-2 border-b flex gap-1">
      <HeadingSizeButton />
      <TextStyleButtonGroup />
      <ActionButtonGroups />
    </div>
  );
}
