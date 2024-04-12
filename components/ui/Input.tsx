const Input = ({
  name,
  type,
  placeholder,
  value,
  disabled,
  fullWidth,
}: {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}) => {
  return (
    <input
      name={name}
      type={type}
      disabled={disabled}
      value={value}
      required
      placeholder={placeholder}
      className={`h-20 bg-transparent border-b text-3xl w-4/5 self-center focus:outline-none
    ${disabled && "opacity-50 cursor-default"}
    ${fullWidth && "w-full"}
    `}
    />
  );
};

export default Input;
