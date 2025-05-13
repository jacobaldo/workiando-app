import {Membership} from '../../../pages/ConfigureEmploye/MembershipSheet/types';

export interface PlanCardProps {
  data: Membership;
  onPress: (data: Membership) => void;
}
