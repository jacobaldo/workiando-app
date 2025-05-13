export interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSelectEmploye: (status: any) => void;
  employes: any;
  loading: boolean;
  selected: string;
}
