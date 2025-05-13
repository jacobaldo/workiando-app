import {ListItemAdmin} from '../pages/App/Drawer/Screens/AdminUsersAndWorks/types';

// export const listItemAdmin: ListItemAdmin[] = [
//   {
//     name: 'Registrados',
//     icon: <Icon name="folder-plus" size={20} color={colors.white} />,
//     type: 'work',
//     navigate: 'RegisteredWorks',
//     get: 'created',
//   },
//   {
//     name: 'Aceptados',
//     icon: <Icon name="folder-plus" size={20} color={colors.white} />,
//     type: 'work',
//     navigate: 'AcceptedWorks',
//     get: 'approved',
//   },
//   {
//     name: 'Vencidos',
//     icon: <Icon name="clock" size={20} color={colors.white} />,
//     type: 'work',
//     navigate: 'RegisteredWorks',
//     get: 'expired',
//   },
//   {
//     name: 'Finalizados',
//     icon: <Icon name="check-circle" size={20} color={colors.white} />,
//     type: 'work',
//     navigate: 'RegisteredWorks',
//     get: 'completed',
//   },
//   {
//     name: 'Solicitud de Mebresias',
//     icon: <Icon name="layers" size={20} color={colors.white} />,
//     type: 'user',
//     navigate: 'RegisteredWorks',
//     get: 'Requested',
//   },
//   {
//     name: 'Usuarios Activos',
//     icon: <Icon name="layers" size={20} color={colors.white} />,
//     type: 'user',
//     navigate: 'RegisteredWorks',
//     get: 'active',
//   },
//   {
//     name: 'Usuarios Inactivos',
//     icon: <Icon name="layers" size={20} color={colors.white} />,
//     type: 'user',
//     navigate: 'RegisteredWorks',
//     get: 'inactive',
//   },

// ];
export const listItemAdmin: ListItemAdmin[] = [
  {
    name: 'Registrados',
    icon: 'edit',
    type: 'work',
    navigate: 'RegisteredWorks',
    get: 'created',
  },
  {
    name: 'Aceptados',
    icon: 'folder-plus',
    type: 'work',
    navigate: 'AcceptedWorks',
    get: 'approved',
  },
  {
    name: 'Vencidos',
    icon: 'clock',
    type: 'work',
    navigate: 'RegisteredWorks',
    get: 'expired',
  },
  {
    name: 'Finalizados',
    icon: 'check-circle',
    type: 'work',
    navigate: 'RegisteredWorks',
    get: 'completed',
  },
  {
    name: 'Solicitud de Mebresias',
    icon: 'meh',
    type: 'user',
    navigate: 'RegisteredWorks',
    get: 'Requested',
  },
  {
    name: 'Usuarios Activos',
    icon: 'smile',
    type: 'user',
    navigate: 'RegisteredWorks',
    get: 'active',
  },
  {
    name: 'Usuarios Inactivos',
    icon: 'frown',
    type: 'user',
    navigate: 'RegisteredWorks',
    get: 'inactive',
  },
];
