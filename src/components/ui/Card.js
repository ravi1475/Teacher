import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export const Card = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: `rounded-lg border bg-card text-card-foreground shadow-sm ${className}`, ...props }));
});
Card.displayName = "Card";
