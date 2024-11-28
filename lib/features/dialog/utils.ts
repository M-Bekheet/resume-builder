export interface DialogState {
  isOpen: boolean;
  title: string;
  description: string;
  cancelText?: string;
  actionText?: string;
  onCancel: () => void;
  onContinue: () => void;
}
