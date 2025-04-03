import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-lg font-medium transition-colors";
  const variantClasses =
    variant === "primary"
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
