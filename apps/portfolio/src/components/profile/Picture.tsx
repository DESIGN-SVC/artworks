import { UserCircle } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useRef } from "react";
import { Button } from "~/components";

type PictureProps = {
  imgSrc: string;
} & ComponentPropsWithRef<"section">;

export const Picture = ({ imgSrc, ...props }: PictureProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleNewUpload = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <section
      className={cx([
        "flex flex-col items-center gap-5",
        "rounded-[0.625rem] p-[20px] bg-white",
        "dark:bg-violet-900 w-full",
        "lg:flex-row lg:p-[30px]"
      ])}
      {...props}
    >
      <img
        src={imgSrc}
        alt="Profile Picture"
        className="rounded-full w-[130px] h-[130px] border-[2px] border-white dark:border-violet-900 lg:w-[100px] lg:h-[100px]"
      />
      <p
        className={cx([
          "font-[14px] text-selago-800",
          "leading-[24px] dark:text-selago-100",
          "w-full max-w-[260px] text-center",
          "lg:text-left lg:mr-auto"
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
    </section>
  );
};
