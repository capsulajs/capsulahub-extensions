import { ModalStatus } from './index';

export default interface ModalUIProps {
  onToggle: (status: ModalStatus) => void;
  isOpen: boolean;
  children: any;
}
