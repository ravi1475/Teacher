import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const AvatarManager = ({ avatar, isOnline = false }) => {
    return (_jsxs("div", { className: "relative group", children: [_jsx("div", { className: "w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-1", children: _jsx("img", { src: avatar, alt: "User Avatar", className: "w-full h-full rounded-full object-cover" }) }), isOnline && (_jsx("span", { className: "absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white" }))] }));
};
export default AvatarManager;
