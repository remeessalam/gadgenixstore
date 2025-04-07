//eslint-disable-next-line
const RotatingBorderLoader = ({ size = "md", color = "blue" }) => {
  // Size variants
  const sizeClasses = {
    xs: "h-4 w-4",
    sm: "h-8 w-8",
    md: "h-12 w-12",
    lg: "h-16 w-16",
    xl: "h-24 w-24",
  };

  // Color variants
  const colorClasses = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    purple: "border-purple-500",
    gray: "border-gray-500",
    white: "border-white",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          ${sizeClasses[size] || sizeClasses.md}
          rounded-full
          border-4
          border-slate-200
          ${colorClasses[color] || colorClasses.blue}
          border-t-transparent
          animate-spin
        `}
      ></div>
    </div>
  );
};

export default RotatingBorderLoader;
