import AsyncStorage from '@react-native-async-storage/async-storage';
import {Work} from '../pages/Search/types';
import ToastController from '../components/2.Molecules/ToastModal/ToastController';

export const loadFavorites = async (): Promise<Work[]> => {
  try {
    const storedFavorites = await AsyncStorage.getItem('@favorites_jobs');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (error) {
    console.error('Error cargando favoritos 11', error);
    return [];
  }
};

export const toggleFavoriteAsync = async (
  job: Work,
): Promise<boolean | null> => {
  try {
    let updatedFavorites = await loadFavorites(); // Obtener favoritos actuales
    const index = updatedFavorites.findIndex(fav => fav._id === job._id); // Usar _id correctamente

    if (index >= 0) {
      updatedFavorites.splice(index, 1);
      ToastController.showModal(
        `Eliminado, ${job.title} fue eliminado de favoritos.`,
        {type: 'success'},
        'top',
        true,
      );
      await AsyncStorage.setItem(
        '@favorites_jobs',
        JSON.stringify(updatedFavorites),
      );
      return false; // Eliminado
    } else {
      updatedFavorites.push(job);
      ToastController.showModal(
        `Agregado, ${job.title} fue agregado a favoritos.`,
        {type: 'success'},
        'top',
        true,
      );
      await AsyncStorage.setItem(
        '@favorites_jobs',
        JSON.stringify(updatedFavorites),
      );
      return true; // Agregado
    }
  } catch (error) {
    console.error('Error guardando en favoritos', error);
    return null; // Error
  }
};
