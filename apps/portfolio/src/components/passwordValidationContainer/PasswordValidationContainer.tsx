import { Check, WarningOctagon } from "@phosphor-icons/react";
import { cx } from "cva";

export const PasswordValidationContainer = ({
  criteriaState,
}: {
  criteriaState: Record<string, boolean>;
}) => {
  type PasswordCriteriaKeys = "length" | "lowercase" | "uppercase" | "number";

  const passwordCriteria = {
    length: { message: "At least 6 characters" },
    lowercase: {
      message: "At least 1 uppercase letter (A...Z)",
    },
    uppercase: {
      message: "At least 1 lowercase letter (a...z)",
    },
    number: { message: "At least 1 number (0...9)" },
  };

  return (
    <ul className="flex flex-col gap-2.5 mr-auto">
      {Object.entries(passwordCriteria).map(([key, { message }]) => (
        <li key={key} className="flex items-center gap-[10px]">
          <Check
            size={18}
            className={cx("text-green-500 sr-only duration-300 ease-in-out", {
              "not-sr-only":
              criteriaState[key as PasswordCriteriaKeys],
            })}
          />

          <WarningOctagon
            size={18}
            className={cx("text-red-500 duration-300 ease-in-out", {
              "sr-only":
              criteriaState[key as PasswordCriteriaKeys],
            })}
          />
          <h5
            className={cx([
              "text-red-500 duration-300 ease-in-out relative",
              'after:content-[""] after:w-0 after:h-[1px] after:absolute after:bg-green-500',
              "after:left-0 after:top-1/2 after:duration-300 after:ease-in",
              {
                "!text-green-500 after:!w-full":
                criteriaState[key as PasswordCriteriaKeys],
              },
            ])}
          >
            {message}
          </h5>
        </li>
      ))}
    </ul>
  );
};
