import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "~/components";

type UserInformationProps = {
  onClose: () => void;
  submitRef: React.RefObject<HTMLButtonElement>;
};

export const UserInformation = ({
  onClose,
  submitRef,
}: UserInformationProps) => {
  type UserForm = {
    name: string;
    team: string;
  };

  const formSchema: z.ZodSchema<UserForm> = z.object({
    name: z.string().min(1, "Could not be empty"),
    team: z.string().min(1, "Could not be empty"),
  });

  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, team },
    },
  } = useForm<UserForm>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit(
    async (fields) => {
      console.log(fields);
      onClose();
    },
    (error) => {
      console.log(error);
    }
  );

  return (
    <form onSubmit={onSubmit}>
      <Input.Input
        label="Name"
        placeholder="Name"
        type="text"
        className="mb-5"
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
      <button className="hidden" type="submit" ref={submitRef} />
    </form>
  );
};
