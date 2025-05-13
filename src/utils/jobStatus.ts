export const JobStatus = (status: string): string => {
  const estados: {[key: string]: string} = {
    created: 'Creado',
    review: 'En revisión',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    completed: 'Completado',
    cancelled: 'Cancelado',
    hired: 'Trabajador contrado',
    expired: 'Expirado',
    deleted: 'Eliminado',
    archived: 'Archivado',
    active: 'Activo',
    inactive: 'Inactivo',
    pending: 'Pendiente',
    published: 'Publicado',
    finished: 'Finalizado',
  };
  return estados[status] || status;
};
