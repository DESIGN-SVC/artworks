import {
  ArrowsOutCardinal,
  Camera,
  Check,
  Pencil,
  Trash,
  UserCircle,
  X,
} from "@phosphor-icons/react";
import {
  ChangeEvent,
  useCallback,
  useRef,
  useState,
  MouseEvent,
  TouchEvent,
} from "react";
import { cx } from "cva";
import { Button, Modal, Tag, Toast } from "~/components";
import { Card, Subtitle } from "./Card";

export const Picture = ({ imgSrc }: { imgSrc: string }) => {
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  return (
    <Card>
      <article className="w-full flex flex-col items-center gap-5 lg:flex-row">
        <img
          src={imgSrc}
          alt="Profile Picture"
          className={cx([
            "rounded-full border-2 border-white",
            "w-32 h-32 lg:w-[6.25rem] lg:h-[6.25rem]",
          ])}
        />
        <Subtitle
          className="max-w-[13.25rem] text-sm text-center lg:text-left"
          label={"At least 800x800 px recommended. JPG or PNG ir allowed"}
        />
        <Button
          appearance="secondary"
          className="lg:self-start lg:w-fit"
          onClick={() => setEditModalOpen(true)}
        >
          <UserCircle size={24} />
          Upload new picture
        </Button>
      </article>

      <NewPictureModal
        imgSrc={imgSrc}
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
      />
    </Card>
  );
};

type NewPictureModalProps = {
  imgSrc: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const NewPictureModal = ({
  imgSrc,
  open,
  onOpenChange,
}: NewPictureModalProps) => {
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [newImgSrc, setNewImgSrc] = useState<string>(imgSrc);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNewUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setNewImgSrc(event.target?.result as string);
      reader.readAsDataURL(file);
      toggleModal("edit");
    }
  };

  const toggleModal = (modal: "delete" | "edit" | "main") => {
    const isDelete = modal === "delete";
    const isEdit = modal === "edit";
    const isMain = modal === "main";

    setDeleteModalOpen(isDelete);
    setEditModalOpen(isEdit);
    onOpenChange(isMain || !(isDelete || isEdit));
  };

  return (
    <>
      <Modal.Root open={open} onOpenChange={onOpenChange}>
        <Modal.Content>
          <Modal.Title className="m-8">Profile photo</Modal.Title>
          <Modal.Close>
            <X size={30} className="text-selago-950 dark:text-selago-50" />
          </Modal.Close>
          <div className="flex justify-center relative mb-[3.75rem]">
            <img
              src={imgSrc}
              alt="Profile Picture"
              className="w-[12.5rem] h-[12.5rem] rounded-full border-2 border-white"
            />
            <Button
              appearance="secondary"
              className="!absolute bottom-10 !w-[7.5rem]"
              size={"sm"}
              onClick={() => inputRef.current?.click()}
            >
              <Camera size={18} />
              Upload photo
            </Button>
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg"
              ref={inputRef}
              onChange={handleNewUpload}
            />
          </div>
          <Modal.ButtonArea>
            <Button
              appearance="secondary"
              onClick={() => toggleModal("delete")}
            >
              <Trash size={24} />
              Delete photo
            </Button>
            <Button appearance="secondary" onClick={() => toggleModal("edit")}>
              <Pencil size={24} />
              Edit photo
            </Button>
          </Modal.ButtonArea>
        </Modal.Content>
      </Modal.Root>
      <DeletePictureModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
      />
      <EditPictureModal
        imgSrc={newImgSrc}
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
      />
    </>
  );
};

type EditPictureModalProps = {
  imgSrc: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const EditPictureModal = ({
  imgSrc,
  open,
  onOpenChange,
}: EditPictureModalProps) => {
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [lastTouchY, setLastTouchY] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const startDrag = useCallback(
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      if ("touches" in e) {
        const touchY = e.touches[0].clientY;
        setLastTouchY(touchY);
      }
      setIsDragging(true);
    },
    []
  );

  const onDrag = useCallback(
    (e: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
      if (!imageRef.current || !isDragging) return;

      const maxY = 0;
      const minY = 260 - imageRef.current.height;
      let newY: number = 0;

      if ("touches" in e) {
        const touchY = e.touches[0].clientY;
        setLastTouchY(touchY);
        const touchDiff = touchY - lastTouchY;
        newY = Math.min(maxY, Math.max(minY, position.y + touchDiff));
      } else {
        newY = Math.min(maxY, Math.max(minY, position.y + e.movementY));
      }
      setPosition({ x: 0, y: newY });
      imageRef.current.style.top = `${position.y}px`;
    },

    [isDragging, position.y, lastTouchY]
  );

  const endDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleCreateImg = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      const isWide = img.width > img.height;
      canvas.width = canvas.height = isWide ? img.height : img.width;

      ctx.drawImage(
        img,
        isWide ? -(img.width - img.height) / 2 : 0,
        position.y * (img.width / 260),
        img.width,
        img.height
      );
      console.log(canvas.toDataURL("image/jpeg"));
    };

    img.src = imgSrc;
    img.crossOrigin = "anonymous";
    //Resto da lógica para upload da imagem

    setToastOpen(true);
    onOpenChange(false);
  };

  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <Modal.Title>Edit photo</Modal.Title>
        <Modal.Close>
          <X size={30} className="text-selago-950 dark:text-selago-50" />
        </Modal.Close>
        <div className="flex flex-col w-full items-center mb-[3.75rem]">
          <div
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
            onTouchStart={startDrag}
            onTouchMove={onDrag}
            className={cx([
              "w-[16.25rem] h-[16.25rem] relative overflow-hidden",
              "select-none cursor-grab",
              { "cursor-grabbing": isDragging },
            ])}
          >
            <img
              ref={imageRef}
              src={imgSrc}
              alt="Profile"
              draggable={false}
              className="absolute min-w-[16.25rem] min-h-[16.25rem] object-cover select-none"
            />
            <span
              className={cx([
                "w-full h-full max-w-[12.5rem] max-h-[12.5rem]",
                "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
                "rounded-full shadow-[#ffff]/50 shadow-[0_0_0_4000px_rgba(0,0,0,0.7)] ",
              ])}
            />
            <Tag.Episode
              className="absolute left-1/2 bottom-10 -translate-x-1/2 -translate-y-1/2 select-none"
              icon={<ArrowsOutCardinal size={14} />}
              text="Drag to position"
            />
          </div>
        </div>
        <Modal.ButtonArea>
          <Modal.Close asChild>
            <Button appearance="secondary">Cancel</Button>
          </Modal.Close>
          <Button appearance="tertiary" onClick={handleCreateImg}>
            Save picture
          </Button>
        </Modal.ButtonArea>
        <Modal.Close />
      </Modal.Content>
      <SuccessToast open={toastOpen} onOpenChange={setToastOpen} />
    </Modal.Root>
  );
};

type DeletePictureModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DeletePictureModal = ({
  open,
  onOpenChange,
}: DeletePictureModalProps) => {
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  const handleDelete = () => {
    setToastOpen(true);
    onOpenChange(false);
    // Lógica para delete posterior
  };

  return (
    <Modal.Root open={open} onOpenChange={onOpenChange}>
      <Modal.Content>
        <Modal.Title>Profile photo</Modal.Title>
        <Modal.Close>
          <X size={30} className="text-selago-950 dark:text-selago-50" />
        </Modal.Close>
        <p className="mx-8 text-xl text-selago-950 dark:text-selago-50 mb-[3.75rem]">
          Are you sure you want to delete your photo?
        </p>
        <Modal.ButtonArea>
          <Modal.Close asChild>
            <Button appearance="secondary">Cancel</Button>
          </Modal.Close>
          <Button appearance="tertiary" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.ButtonArea>
      </Modal.Content>
      <SuccessToast open={toastOpen} onOpenChange={setToastOpen} />
    </Modal.Root>
  );
};

const SuccessToast = ({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  return (
    <Toast
      open={open}
      onOpenChange={onOpenChange}
      success={true}
      position="bottom"
      direction="right"
      icon={<Check size={18} />}
      label="Changes saved successfully"
      className="min-w-[22.25rem] py-3.5 px-2.5"
    />
  );
};
