/**
 * Returns a stateful value, and a toggle function to update it.
 * @default false
 */
export default function useChatbot(): {
    isOpen: boolean;
    toggle: () => void;
};
