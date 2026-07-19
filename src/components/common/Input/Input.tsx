import { forwardRef } from "react";

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className,
      id,
      name,
      required,
      ...rest
    },
    ref
  ) => {
    const inputId = id || name;

    return (
      <div className="mb-4">
        <label
          htmlFor={inputId}
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>

        <input
          id={inputId}
          name={name}
          ref={ref}
          required={required}
          {...rest}
          className={`
            w-full
            rounded-lg
            border
            border-gray-300
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-2
            focus:ring-indigo-200
            ${className ?? ""}
          `}
        />

        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;