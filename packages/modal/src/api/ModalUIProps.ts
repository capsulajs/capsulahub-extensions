import { ModalStatus } from './index';

export default interface ModalUIProps {
  title: string;
  children: any;
  isOpen?: boolean;
  onToggle?: (status: ModalStatus) => void;
}
