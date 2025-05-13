export interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleSelectMembership: (status: any) => void;
  membership: Membership[] | undefined;
  loading: boolean;
  selected: Membership;
  textButton: string;
}

export interface MembershipAll {
  docs: Membership[] | undefined;
  pagination: Pagination;
}

export interface Membership {
  _id: string;
  name: string;
  price: number;
  duration: number;
  __v: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Pagination {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null;
  nextPage: null;
}
