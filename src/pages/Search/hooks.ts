import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { useCurrentLocation } from "../../hooks/useLocationPemission";
import {
  getLocationUser,
  saveListAddresses,
  saveLocationUser,
} from "../../provider/AddressAsyncStore";
import { useUser } from "../../provider/AuthProvider";
import { loadFavorites, toggleFavoriteAsync } from "../../provider/favorites";
import {
  setFavorites,
  toggleFavorite,
} from "../../redux/Favorites/FavoritesAcction";
import { SaveInitAddress } from "../../redux/InitAddress/AddressAcction";
import { setSubscription } from "../../redux/Subscriptions/subscriptionAcction";
import useAxiosGet from "../../services/apiGet";
import {
  getAddress,
  getPosition,
  locationPermissions,
} from "../../utils/geolocation";
import { useSubscribeNotification } from "../../utils/notification/notification.utils";
import { AllCategories, Subscription, Work } from "./types";

const useSearch = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { requestLocationPermission } = useCurrentLocation();
  const { subscribe } = useSubscribeNotification();
  const {
    authState: { user },
  } = useUser();
  let { initAddress } = useSelector((store: any) => store?.data);
  const { favorites } = useSelector((state: any) => state.favorites);
  const [openBtnSheet, setOpenBtnSheet] = useState<boolean>(false);
  const [openBtnFilterSheet, setOpenBtnFilterSheet] = useState<boolean>(false);
  const [searchText, setSearchText] = useState("");
  const [search, setSearch] = useState("");

  const { filterCategories, filterTypeEmployes, filterRange } = useSelector(
    (state: any) => state.filterReducer
  );

  let categoriesIDS =
    filterCategories.length > 0 ? filterCategories : user?.categoryIds ?? [];
  const { data, getData, loading, refreshData } = useAxiosGet<AllCategories>(
    `/category/home?latitude=${initAddress?.latitude}&longitude=${initAddress?.longitude}&ratio=${initAddress?.radio}&status=approved&minimumPrice=${filterRange}&typeEmployeId=${filterTypeEmployes}&categoryIds=${categoriesIDS}&searchTerm=${searchText}`
  );

  const {
    data: dataSubscription,
    getData: getDataSubscription,
    // loading: loadingSubscription,
    // refreshData: refreshSubscription,
  } = useAxiosGet<Subscription>(`/plan/membership/status/${user?._id}`);

  const handleSelectUser = (state: boolean) => {
    if (state) {
      setOpenBtnSheet(false);
      setOpenBtnFilterSheet(true);
    } else {
      setOpenBtnSheet(false);
      navigation.navigate("ConfigureEmploye");
    }
  };
  const getLocation = async () => {
    const resLocation = await locationPermissions();

    if (resLocation === "granted") {
      getPosition(async (position) => {
        const address = await getAddress(position.coords);

        if (address) {
          const body = { ...address, radio: 30 };
          dispatch(SaveInitAddress(body));
          await saveListAddresses(body);
          saveLocationUser(body);
        }
      });
    }
  };
  const getUbications = async () => {
    if (!initAddress?.country) {
      const location = await getLocationUser();

      if (location) {
        dispatch(SaveInitAddress(location));
        await saveListAddresses(location);
      } else {
        getLocation();
      }
    }
  };
  const getSubscritionStatus = () => {
    if (dataSubscription?.hasMembership) {
      dataSubscription.membership &&
        dispatch(setSubscription(dataSubscription.membership));
    } else {
      showMessage({
        message: "Felicidades!!",
        description: `${dataSubscription?.message}`,
        type: "success",
        icon: "success",
      });
    }
  };
  useEffect(() => {
    getUbications();
    subscribe();
    getDataSubscription();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    initAddress && getData();
    dataSubscription && getSubscritionStatus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initAddress, dataSubscription, search]);
  useEffect(() => {
    setOpenBtnSheet(true);
    requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const debouncedSearchRef = useRef(
    debounce((text) => {
      setSearch(text);
    }, 500)
  );

  const onPressNavigateEmployer = (item: Work) => {
    navigation.navigate("WorkDetail", { navigation, body: item });
  };
  const onConfigLocation = () => {
    navigation.navigate("LocationList");
  };
  const loadAllFavorites = async () => {
    try {
      const storedFavorites = await loadFavorites();

      if (storedFavorites && storedFavorites.toString().trim() !== "") {
        const parsedFavorites = JSON.parse(storedFavorites.toString());
        dispatch(setFavorites(parsedFavorites));
      } else {
        dispatch(setFavorites([]));
      }
    } catch (error) {
      showMessage({
        message: "Error!!",
        description: "Error cargando favoritos",
        type: "danger",
        icon: "danger",
      });
    }
  };

  useEffect(() => {
    loadAllFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleFavorite = async (job: Work) => {
    dispatch(toggleFavorite(job));
    await toggleFavoriteAsync(job);
  };
  return {
    setSearchText,
    searchText,
    openBtnSheet,
    setOpenBtnSheet,
    handleSelectUser,
    openBtnFilterSheet,
    setOpenBtnFilterSheet,
    loading,
    data,
    refreshData,
    onPressNavigateEmployer,
    getData,
    filterCategories,
    filterTypeEmployes,
    filterRange,
    initAddress,
    onConfigLocation,
    debouncedSearchRef,
    favorites,
    handleToggleFavorite,
  };
};
export default useSearch;
