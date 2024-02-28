/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Button = forwardRef(
  ({ variant = "btn", children, className, ...rest }, ref) => {
    const getVariant = (variant) => {
      switch (variant) {
        case "solid":
          return "btn-solid";
        case "outline":
          return "btn-outline";
        case "ghost":
          return "btn-ghost";

        default:
          return "btn";
      }
    };

    return (
      <button
        ref={ref}
        {...rest}
        className={cn(getVariant(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
