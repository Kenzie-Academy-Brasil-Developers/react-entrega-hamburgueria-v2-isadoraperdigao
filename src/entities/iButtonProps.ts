export interface iButtonProps {
    text?: string;
    callback?: () => void;
    isDashboard: boolean;
    type: "button" | "submit"
}