import React from 'react'

interface InputProps {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
const Input = ({ label, name, type, placeholder, value, onChange, error, required }: InputProps) => {
  return (
    <div className="mb-4">
      {/* Label */}
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>

      {/* Input */}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
      />

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input