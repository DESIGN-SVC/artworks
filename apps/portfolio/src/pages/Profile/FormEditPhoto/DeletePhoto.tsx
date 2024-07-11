import { Button } from "~/components";
import { FormDialog } from "../FormDialog";

type DeletePhotoProps = {
  theme?: "light" | "dark";
  onCancel: () => void;
  onDelete: () => void;
  open: boolean;
  onClose: (open: boolean) => void;
};

export const DeletePhoto = ({
  onClose,
  onCancel,
  onDelete,
  open,
  theme,
}: DeletePhotoProps) => {
  return (
    <FormDialog.Root
      open={open}
      onOpenChange={(e) => {
        onClose(e);
      }}
      asChild
    >
      <div>
        <FormDialog.Content title="Profile photo">
          <p className="text-xl dark:text-selago-50 text-selago-950">
            Are you sure you want to delete your photo?
          </p>
        </FormDialog.Content>
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

          <Button appearance="tertiary" onClick={onDelete}>
            Delete
          </Button>
        </FormDialog.Footer>
      </div>
    </FormDialog.Root>
  );
};
