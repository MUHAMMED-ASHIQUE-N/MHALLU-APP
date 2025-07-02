import { jsx as _jsx } from "react/jsx-runtime";
// components/ui/card.tsx
export function Card({ className, ...props }) {
    return (_jsx("div", { className: `rounded-lg border border-gray-200 bg-white text-gray-950 shadow-sm ${className || ''}`, ...props }));
}
export function CardHeader({ className, ...props }) {
    return _jsx("div", { className: `flex flex-col space-y-1.5 p-6 ${className || ''}`, ...props });
}
export function CardTitle({ className, ...props }) {
    return _jsx("h3", { className: `text-xl font-semibold leading-none tracking-tight ${className || ''}`, ...props });
}
export function CardContent({ className, ...props }) {
    return _jsx("div", { className: `p-6 pt-0 ${className || ''}`, ...props });
}
