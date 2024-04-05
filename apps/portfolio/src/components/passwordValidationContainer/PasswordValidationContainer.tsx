import { Check, WarningOctagon } from "@phosphor-icons/react";

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
      <h2 className="text-white text-3xl font-medium mb-8">
        Password must contain:
      </h2>
      {Object.entries(passwordCriteria).map(([key, { message }]) => (
        <li key={key} className="flex items-center gap-4">
          {criteriaState[key as PasswordCriteriaKeys] ? (
            <>
              <Check size={18} className="text-green-500" />
              <h5 className="text-green-500 line-through">{message}</h5>
            </>
          ) : (
            <>
              <WarningOctagon size={18} className="text-red-500" />
              <h5 className="text-red-500">{message}</h5>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};
