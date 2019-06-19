import { ModalUIProps } from '../api/index';

export const basicProps: ModalUIProps = {
  onToggle: console.log,
  title: 'Example of title',
  isOpen: true,
  children: 'Example of content',
};
