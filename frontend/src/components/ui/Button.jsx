const Button = ({ children, outline = false }) => {
  return (
    <button
      className={`
        group
        flex items-center justify-center gap-2

        rounded-xl
        px-7
        py-4

        font-semibold

        transition-all
        duration-300

        hover:-translate-y-1
        hover:scale-105
        hover:shadow-xl

        active:scale-95

        ${
          outline
            ? `
              border border-primary
              bg-white
              text-primary

              hover:bg-primary
              hover:text-white
            `
            : `
              bg-primary
              text-white
            `
        }
      `}
    >
      {children}
    </button>
  );
};

export default Button;
