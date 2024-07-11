import { PencilSimple, UserCircle } from "@phosphor-icons/react";
import { cx } from "cva";
import { ComponentPropsWithRef, useEffect, useState } from "react";
import { Button, NavHeader } from "~/components";
import { useSession, useTheme } from "~/hooks";

import { FormEditPassword } from "./FormEditPassword";
import { FormEditProfile } from "./FormEditProfile";
import { FormEditPhoto } from "./FormEditPhoto";

export const Profile = () => {
  const { user } = useSession();
  const { theme } = useTheme();
  const [openModal, setOpenModal] = useState({
    editPassword: false,
    editProfile: false,
    editPhoto: false,
  });

  useEffect(() => {
    document.title = "Artworks | Profile";
  }, []);

  return (
    <>
      <main className="container py-5 flex flex-col gap-5 lg:py-8">
        <NavHeader.Root>
          <NavHeader.BreadCrumb crumbs={["Home", "Profile"]} />
          <NavHeader.Title>Profile</NavHeader.Title>
        </NavHeader.Root>
        <div
          className={cx([
            "w-full p-2.5 max-w-xl mx-auto",
            "rounded-xl bg-selago-50",
            "flex flex-col gap-2.5",
            "lg:max-w-full",
            "dark:bg-violet-950",
          ])}
        >
          <Container className="lg:flex-row lg:p-8 lg:items-center lg:justify-start">
            <img
              src={user.avatar_url}
              alt={"Profile picture of " + user.name}
              className={cx([
                "w-full max-w-32 aspect-square mx-auto",
                "rounded-full border-2 border-violet-50",
                "lg:mx-0",
              ])}
            />
            <div className="w-full text-center text-selago-800 text-sm lg:w-fit lg:text-start lg:leading-6">
              At least 800x800 px recommended. <br />
              JPG or PNG ir allowed
            </div>
            <Button
              appearance={theme === "dark" ? "primary" : "secondary"}
              className="lg:max-w-48 lg:ml-auto"
              onClick={() =>
                setOpenModal({
                  ...openModal,
                  editPhoto: true,
                })
              }
            >
              <UserCircle size={24} />
              <p>Upload new picture</p>
            </Button>
          </Container>
          <Container className="lg:flex-row lg:justify-between">
            <div className="space-y-5 lg:flex-1">
              <h5 className="text-selago-900 font-bold text-base dark:text-white">
                Personal info
              </h5>
              <ul className="flex flex-col gap-5 lg:flex-row ">
                <li className="w-full lg:max-w-64">
                  <p className="text-selago-800">Full name</p>
                  <p className="text-selago-950 font-semibold dark:text-white">
                    {user.name}
                  </p>
                </li>
                <li className="w-full lg:max-w-64">
                  <p className="text-selago-800">Email</p>
                  <p className="text-selago-950 font-semibold dark:text-white">
                    {user.email}
                  </p>
                </li>
                <li className="w-full lg:max-w-64">
                  <p className="text-selago-800">Team</p>
                  <p className="text-selago-950 font-semibold dark:text-white">
                    {user?.team}
                  </p>
                </li>
              </ul>
            </div>
            <Button
              appearance={theme === "dark" ? "primary" : "secondary"}
              className="lg:max-w-40"
              onClick={() =>
                setOpenModal({
                  ...openModal,
                  editProfile: true,
                })
              }
            >
              <PencilSimple size={24} />
              <p>Edit info</p>
            </Button>
          </Container>
          <Container className="lg:flex-row lg:justify-between">
            <div className="space-y-5">
              <h5 className="text-selago-900 font-bold text-base dark:text-white">
                Security
              </h5>
              <p className="text-selago-800 dark:text-selago-200">
                Edit your password.
              </p>
            </div>

            <Button
              appearance={theme === "dark" ? "primary" : "secondary"}
              className="lg:max-w-40"
              onClick={() =>
                setOpenModal({
                  ...openModal,
                  editPassword: true,
                })
              }
            >
              <PencilSimple size={24} />
              <p>Edit password</p>
            </Button>
          </Container>
        </div>
      </main>

      <FormEditPassword
        open={openModal.editPassword}
        onClose={(e) => setOpenModal({ ...openModal, editPassword: e })}
      />
      <FormEditProfile
        open={openModal.editProfile}
        onClose={(e) => setOpenModal({ ...openModal, editProfile: e })}
      />
      <FormEditPhoto
        open={openModal.editPhoto}
        onClose={(e) => setOpenModal({ ...openModal, editPhoto: e })}
      />
    </>
  );
};

const Container = ({ className, ...props }: ComponentPropsWithRef<"div">) => (
  <div
    className={cx([
      "rounded-[0.875rem] bg-white p-5",
      "flex flex-col gap-5",
      "dark:bg-violet-1000",
      className,
    ])}
    {...props}
  />
);
