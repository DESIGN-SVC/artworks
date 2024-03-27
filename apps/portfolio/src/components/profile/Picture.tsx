import { Pencil, Trash, UserCircle } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useRef, useState } from "react";
import { Button, Modal } from "~/components";

type PictureProps = {
  imgSrc: string;
} & ComponentPropsWithRef<"section">;

export const Picture = ({ imgSrc, ...props }: PictureProps) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [img, setImg] = useState<string>(imgSrc);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleNewUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          imgSrc = e.target.result as string;
          setImg(imgSrc);
        }
      };
      reader.readAsDataURL(file);

      setModalOpen(true);
    }
  };

  const onClose = () => {
    setModalOpen(false);
  };

  return (
    <section
      className={cx([
        "flex flex-col items-center gap-5",
        "rounded-[0.625rem] p-[20px] bg-white",
        "dark:bg-violet-900 w-full",
        "lg:flex-row lg:p-[30px]",
      ])}
      {...props}
    >
      <img
        src={img}
        alt="Profile Picture"
        className="rounded-full w-[130px] h-[130px] border-[2px] border-white dark:border-violet-900 lg:w-[100px] lg:h-[100px]"
      />
      <p
        className={cx([
          "font-[14px] text-selago-800",
          "leading-[24px] dark:text-selago-100",
          "w-full max-w-[260px] text-center",
          "lg:text-left lg:mr-auto",
        ])}
      >
        At least 800x800 px recommended. JPG or PNG ir allowed
      </p>
      <Button
        appearance="secondary"
        className="lg:self-start lg:w-fit"
        onClick={handleUpload}
      >
        <UserCircle size={24} />
        Upload new picture
      </Button>
      <input
        type="file"
        className="hidden"
        accept="image/png, image/jpeg"
        ref={inputRef}
        onChange={handleNewUpload}
      />
      {modalOpen && <NewPictureModal onClose={onClose} img={img} />}
    </section>
  );
};

type EditInformationModalProps = {
  img: string;
  onClose: () => void;
};

const NewPictureModal = ({ img, onClose }: EditInformationModalProps) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };
  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root className="w-[468px]">
        <Modal.Portal>
          <Modal.Title label="Profile photo" />
          <Modal.Content>
            <img
              src={img}
              alt="Profile Picture"
              className="rounded-full w-[130px] h-[130px] border-[2px] border-white dark:border-violet-900 lg:w-[100px] lg:h-[100px]"
            />
          </Modal.Content>
          <Modal.ButtonArea>
            <Button appearance="secondary" onClick={openDeleteModal}>
              <Trash size={24} />
              Delete photo
            </Button>
            <Button appearance="secondary" >
              <Pencil size={24} />
              Edit photo
            </Button>
            {deleteModalOpen && <DeletePictureModal onClose={onClose} />}
          </Modal.ButtonArea>
        </Modal.Portal>
      </Modal.Root>
    </Modal.Overlay>
  );
};

const EditPictureModal = ({ onClose }: EditInformationModalProps) => {
  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root>
        <Modal.Portal>
          <Modal.Title label="Profile photo" />
          <Modal.Content>
            <form className="gap-[20px]">
              <input type="file" />
            </form>
          </Modal.Content>
          <Modal.ButtonArea>
            <Button appearance="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button appearance="primary" onClick={onClose}>
              Save
            </Button>
          </Modal.ButtonArea>
        </Modal.Portal>
      </Modal.Root>
    </Modal.Overlay>
  );
};

type DeletePictureModalProps = {
  onClose: () => void;
};

const DeletePictureModal = ({ onClose }: DeletePictureModalProps) => {
  return (
    <Modal.Overlay onClose={onClose}>
      <Modal.Root>
        <Modal.Portal>
          <Modal.Title label="Profile photo" />
          <Modal.Content>
            <p>Are you sure you want to delete your photo?</p>
          </Modal.Content>
          <Modal.ButtonArea>
            <Button appearance="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button appearance="tertiary" onClick={onClose}>
              Delete
            </Button>
          </Modal.ButtonArea>
        </Modal.Portal>
      </Modal.Root>
    </Modal.Overlay>
  );
};
