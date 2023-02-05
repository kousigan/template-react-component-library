import React from 'react';
declare const ColorButton: import("@emotion/styled").StyledComponent<{
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material/Button").ButtonClasses>;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    disabled?: boolean;
    disableElevation?: boolean;
    disableFocusRipple?: boolean;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    href?: string;
    size?: "small" | "medium" | "large";
    startIcon?: React.ReactNode;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme>;
    variant?: "text" | "outlined" | "contained";
} & Omit<{
    action?: React.Ref<import("@mui/material").ButtonBaseActions>;
    centerRipple?: boolean;
    children?: React.ReactNode;
    classes?: Partial<import("@mui/material").ButtonBaseClasses>;
    disabled?: boolean;
    disableRipple?: boolean;
    disableTouchRipple?: boolean;
    focusRipple?: boolean;
    focusVisibleClassName?: string;
    LinkComponent?: React.ElementType<any>;
    onFocusVisible?: React.FocusEventHandler<any>;
    sx?: import("@mui/material/styles").SxProps<import("@mui/material/styles").Theme>;
    tabIndex?: number;
    TouchRippleProps?: Partial<import("@mui/material/ButtonBase/TouchRipple").TouchRippleProps>;
    touchRippleRef?: React.Ref<import("@mui/material/ButtonBase/TouchRipple").TouchRippleActions>;
}, "classes"> & import("@mui/material/OverridableComponent").CommonProps & Omit<Pick<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "key" | keyof React.ButtonHTMLAttributes<HTMLButtonElement>> & {
    ref?: React.Ref<HTMLButtonElement>;
}, keyof import("@mui/material/OverridableComponent").CommonProps | "tabIndex" | "color" | "children" | "action" | "centerRipple" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "TouchRippleProps" | "touchRippleRef" | "href" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "size" | "startIcon" | "variant"> & import("@mui/system").MUIStyledCommonProps<import("@mui/material/styles").Theme>, {}, {}>;
export default ColorButton;
