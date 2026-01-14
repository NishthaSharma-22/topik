import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button variant="secondary">Primary</Button>
      <Button variant="secondaryOutline">Primary Outline</Button>
      <Button variant="sidebar">Primary</Button>
      <Button variant="tertiaryOutline">Primary Outline</Button>
    </div>
  );
};

export default ButtonsPage;
