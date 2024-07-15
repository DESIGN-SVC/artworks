import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button, Input, Loading } from "~/components";
import { FormDialog } from "./FormDialog";
import { useSession, useTheme, useProfileMutation } from "~/hooks";
import { useEffect } from "react";

type FormEditProfileProps = {
  open: boolean;
  onClose: (open: boolean) => void;
};

export const FormEditProfile = ({ onClose, open }: FormEditProfileProps) => {
  const { theme } = useTheme();
  const {
    mutate: updateUser,
    data,
    isSuccess,
    isPending,
  } = useProfileMutation();
  const { setUser, user } = useSession();
  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, team },
    },
    reset,
  } = useForm<EditProfileFields>({
    resolver: zodResolver(EditProfileSchema),
  });

  const onSubmit = handleSubmit(async ({ name, team }) => {
    updateUser({ name, team });
    reset({ name, team });
  });

  useEffect(() => {
    if (isSuccess) {
      onClose(false);
      setUser(data);
    }
  }, [isSuccess]);

  if (isPending) return <Loading />;

  return (
    <FormDialog.Root
      open={open}
      onOpenChange={(e) => {
        onClose(e);
        reset();
      }}
      onSubmit={onSubmit}
    >
      <FormDialog.Content title="Edit profile">
        <div className="space-y-5">
          <fieldset className="space-y-5">
            <Input.Input
              label="Name"
              placeholder="Name"
              {...register("name")}
              error={name?.message}
              defaultValue={user?.name}
            />
            <Input.Input
              label="Team"
              placeholder="Team"
              {...register("team")}
              error={team?.message}
              defaultValue={user?.team}
            />
          </fieldset>
        </div>
      </FormDialog.Content>
      <FormDialog.Footer>
        <FormDialog.Close asChild>
          <Button
            appearance={theme === "dark" ? "ghost" : "secondary"}
            type="button"
          >
            Cancel
          </Button>
        </FormDialog.Close>
        <Button appearance="tertiary" onClick={onSubmit}>
          Save
        </Button>
      </FormDialog.Footer>
    </FormDialog.Root>
  );
};

const EditProfileSchema = z.object({
  name: z
    .string()
    .min(6, { message: "Name must be at least 6 characters long" })
    .refine(
      (value) => {
        const name = /^(?=.*[0-9])/.test(value);
        return !name;
      },
      {
        message: "Name invalid",
      },
    ),
  team: z
    .string()
    .min(6, { message: "Team must be at least 6 characters long" })
    .refine(
      (value) => {
        const name = /^(?=.*[0-9])/.test(value);
        return !name;
      },
      {
        message: "Team invalid",
      },
    ),
});

export type EditProfileFields = z.infer<typeof EditProfileSchema>;
