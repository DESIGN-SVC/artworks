import { FormDialog } from "./FormDialog";
import { Camera, PencilSimple, Trash } from "@phosphor-icons/react";
import { useAvatarMutation, useSession, useTheme } from "~/hooks";
import { cx } from "cva";
import { Button, Loading } from "~/components";
import { useEffect, useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";

type FormEditPhotoProps = {
  open: boolean;
  onClose: (open: boolean) => void;
};

export const FormEditPhoto = ({ onClose, open }: FormEditPhotoProps) => {
  const { user, setUser } = useSession();
  const { theme } = useTheme();
  const [openModal, setOpenModal] = useState({
    deletePhoto: false,
    editPhoto: false,
  });
  const cropRef = useRef<AvatarEditor>(null);
  const {
    mutate: updateAvatar,
    isPending,
    isSuccess,
    data,
  } = useAvatarMutation();

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();

    if (file) {
      formData.append("avatar", file);
      updateAvatar({ avatar: formData });
      setUser({ ...user, avatar: URL.createObjectURL(file) });
    }
  };

  const handleDeletePhoto = () => {
    setUser({ ...user, avatar: undefined });
  };

  const handleSave = () => {
    if (cropRef.current) {
      const canvas = cropRef.current.getImageScaledToCanvas().toDataURL();
      setUser({ ...user, avatar: canvas });
    }
    setOpenModal({ ...openModal, editPhoto: false });
    onClose(true);
  };

  useEffect(() => {
    if (isSuccess) {
      setUser(data);
    }
  }, [isSuccess]);

  if (isPending) return <Loading />;
  return (
    <>
      <FormDialog.Root
        open={open}
        onOpenChange={(e) => {
          onClose(e);
        }}
        asChild
      >
        <div>
          <FormDialog.Content title="Profile photo">
            <div className="relative">
              <img
                src={user.avatar}
                alt={"Profile picture of " + user.name}
                className={cx([
                  "w-full max-w-48 aspect-square mx-auto object-cover object-center",
                  "rounded-full border-2 border-violet-50",
                ])}
              />
              <input
                type="file"
                id="file-img"
                hidden
                onChange={(e) => handleUploadPhoto(e)}
              />
              <Button
                asChild
                className={cx([
                  "!py-1.5 !px-2.5 max-h-8 max-w-[7.313rem]",
                  "cursor-pointer !gap-1.5",
                  "!absolute left-1/2 bottom-10 -translate-x-1/2 ",
                  "text-xs font-medium",
                ])}
                appearance={"secondary"}
              >
                <label htmlFor="file-img">
                  <Camera size={18} />
                  Upload photo
                </label>
              </Button>
            </div>
          </FormDialog.Content>
          <FormDialog.Footer>
            <Button
              appearance={theme === "dark" ? "ghost" : "secondary"}
              type="button"
              onClick={() => {
                setOpenModal({
                  ...openModal,
                  deletePhoto: true,
                });
                onClose(false);
              }}
            >
              <Trash />
              Delete photo
            </Button>

            <Button
              appearance="tertiary"
              onClick={() => {
                setOpenModal({
                  ...openModal,
                  editPhoto: true,
                });
                onClose(false);
              }}
            >
              <PencilSimple />
              Edit photo
            </Button>
          </FormDialog.Footer>
        </div>
      </FormDialog.Root>
      <DeletePhoto
        onCancel={() => onClose(true)}
        theme={theme}
        open={openModal.deletePhoto}
        onClose={(e) => {
          setOpenModal({ ...openModal, deletePhoto: e });
          onClose(true);
        }}
        onDelete={() => {
          setOpenModal({ ...openModal, deletePhoto: false });
          handleDeletePhoto();
          onClose(true);
        }}
      />
      <EditPhoto
        onCancel={() => onClose(true)}
        theme={theme}
        open={openModal.editPhoto}
        onClose={(e) => {
          setOpenModal({ ...openModal, editPhoto: e });
          onClose(true);
        }}
        onSave={handleSave}
        children={
          <AvatarEditor
            ref={cropRef}
            image={user.avatar as string}
            scale={1}
            className={cx([
              "mx-auto !w-[200px] !h-[200px]",
              "rounded-full border-2 border-violet-50",
            ])}
            borderRadius={200}
            disableCanvasRotation
            disableHiDPIScaling
            disableBoundaryChecks
          />
        }
      />
    </>
  );
};
type DeletePhotoProps = {
  theme?: "light" | "dark";
  onCancel: () => void;
  onDelete: () => void;
} & FormEditPhotoProps;

const DeletePhoto = ({
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
type EditPhotoProps = {
  theme?: "light" | "dark";
  onCancel: () => void;
  onSave: () => void;
  children: React.ReactNode;
} & FormEditPhotoProps;
const EditPhoto = ({
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
