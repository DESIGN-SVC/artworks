import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "~/components";

export const UserInformation = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, team },
    },
  } = useForm<UserFields>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = handleSubmit(
    async (fields) => {
      console.log(fields);
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <form
      onSubmit={onSubmit}
      id="user-information-form"
      className="space-y-5 mx-8 mb-[60px]"
    >
      <Input.Input
        label="Name"
        placeholder="Name"
        type="text"
        {...register("name")}
        error={name?.message}
      />
      <Input.Input
        label="Team"
        placeholder="Team"
        type="text"
        {...register("team")}
        error={team?.message}
      />
    </form>
  );
};

const UserSchema = z.object({
  name: z.string().min(1, "Could not be empty"),
  team: z.string().min(1, "Could not be empty"),
});

type UserFields = z.infer<typeof UserSchema>;
