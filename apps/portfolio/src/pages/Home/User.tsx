import { cx } from "cva";

interface UserProps {
  name: string;
  avatar?: string;
}
export const User = ({ name, avatar }: UserProps) => (
  <div
    className={cx([
      "flex gap-5",
      "w-full pb-3 border-b border-selago-200",
      "transition-all duration-500 ease-in-out",
      "dark:border-violet-900",
    ])}
  >
    <img
      src={avatar}
      alt={name}
      className="w-full max-w-14 rounded-full max-h-14 h-full object-center object-cover"
    />

    <div>
      <h1 className="text-2xl font-semibold text-selago-950 dark:text-white">
        Hello, {name?.split(" ")?.[0]}
      </h1>
      <p className="text-selago-700 dark:text-white">
        Welcome to the Artworks Portfolio.
      </p>
    </div>
  </div>
);
