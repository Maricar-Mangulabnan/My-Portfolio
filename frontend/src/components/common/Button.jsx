const Button = ({ children, outline = false, className = "" }) => {
  return (
    <button
      className={`
        flex items-center justify-center gap-2
        rounded-xl
        px-7 py-4
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1

        ${
          outline
            ? "border border-primary text-primary hover:bg-primary hover:text-white"
            : "bg-primary text-white hover:shadow-xl"
        }

        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
