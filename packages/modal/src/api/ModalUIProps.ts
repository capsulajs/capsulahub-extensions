import { ModalStatus } from './index';

export default interface ModalUIProps {
  onToggle: (status: ModalStatus) => void;
  title: string;
  isOpen: boolean;
  children: any;
}
