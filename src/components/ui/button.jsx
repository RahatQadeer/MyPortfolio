// src/components/ui/button.jsx
const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-1.5 rounded-4xl font-medium transition duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
