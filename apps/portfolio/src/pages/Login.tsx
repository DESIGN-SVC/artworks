import { Tag } from "~/components";

export const Login = () => {
  return (
    <div>
      <Tag.Description text="Tag" />
      <Tag.Episode text="Episode" />
      <Tag.Production personName="Name" personFunction="Function" type={"delete"} />
    </div>
  );
};
