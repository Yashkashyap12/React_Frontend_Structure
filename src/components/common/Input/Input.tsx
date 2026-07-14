import { forwardRef } from "react";


interface InputProps {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;

  // Only UI star ke liye
  required?: boolean;

  error?: string;

  // React Hook Form support
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}


const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      type,
      placeholder,
      required,
      error,
      onChange,
      onBlur,
      ...rest
    },
    ref
  ) => {

    return (
      <div className="mb-4">

        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}

          {
            required && (
              <span className="ml-1 text-red-500">
                *
              </span>
            )
          }

        </label>


        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}

          // ❌ required attribute removed
          ref={ref}

          onChange={onChange}
          onBlur={onBlur}

          {...rest}

          className="
            w-full 
            border 
            border-gray-300 
            rounded-lg 
            px-4 
            py-3 
            outline-none 
            focus:border-indigo-500 
            focus:ring-2 
            focus:ring-indigo-200
          "
        />


        {
          error && (
            <p className="text-red-500 text-sm mt-1">
              {error}
            </p>
          )
        }


      </div>
    );
  }
);


Input.displayName = "Input";


export default Input;