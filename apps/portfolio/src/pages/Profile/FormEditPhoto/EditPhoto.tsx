import { Button } from "~/components";
import { FormDialog } from "../FormDialog";

type EditPhotoProps = {
  theme?: "light" | "dark";
  onCancel: () => void;
  onSave: () => void;
  children: React.ReactNode;
  open: boolean;
  onClose: (open: boolean) => void;
};
export const EditPhoto = ({
  onClose,
  onCancel,
  onSave,
  open,
  theme,
  children,
}: EditPhotoProps) => {
  return (
    <FormDialog.Root
      open={open}
      onOpenChange={(e) => {
        onClose(e);
      }}
      asChild
    >
      <div>
        <FormDialog.Content title="Edit photo">{children}</FormDialog.Content>
        <FormDialog.Footer>
          <FormDialog.Close asChild>
            <Button
              onClick={onCancel}
              appearance={theme === "dark" ? "ghost" : "secondary"}
              type="button"
            >
              Cancel
            </Button>
          </FormDialog.Close>

          <Button appearance="tertiary" onClick={onSave}>
            Save picture
          </Button>
        </FormDialog.Footer>
      </div>
    </FormDialog.Root>
  );
};
