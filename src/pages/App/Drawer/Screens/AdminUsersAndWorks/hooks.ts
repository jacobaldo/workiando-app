import { debounce } from "lodash";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { showMessage } from "react-native-flash-message";
import { listItemAdmin } from "../../../../../mooks/listItemAdmin";
import useAxiosGet from "../../../../../services/apiGet";
import useAxiosPut from "../../../../../services/apiPut";
import { MembershipAll } from "../../../../ConfigureEmploye/MembershipSheet/types";
import { bodyCreate } from "../../../../ConfigureEmploye/types";
import { Categories, Membership, Work } from "../../../../Search/types";
import {
  AdminUserAndWorksProps,
  ListItemAdmin,
  Subscription,
  SubscriptionAll,
} from "./types";

export const useAcceptedWorks = ({
  navigation,
  type,
}: AdminUserAndWorksProps) => {
  const [listAdmin, setListAdmin] = useState<ListItemAdmin[]>();
  const [selectItem, setSelectItem] = useState<number>(0);
  const [query, setQuery] = useState("");
  const [visibleDialog, setVisibleDialog] = useState(false);
  const [visibleDialogM, setVisibleDialogM] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Work>();
  const [selectedItemM, setSelectedItemM] = useState<Subscription>();
  const [openMembershipSheet, setOpenMembershipBtnSheet] =
    useState<boolean>(false);
  const [selectMembership, setSelectedMembership] = useState<Membership>();
  const {
    data: membership,
    getData: getMembership,
    loading: loadingMembership,
  } = useAxiosGet<MembershipAll>("/plan/membership");
  const {
    data: listData,
    getData,
    loading,
    refreshData,
  } = useAxiosGet<Categories>(
    `/works?status=${(listAdmin && listAdmin[selectItem]?.get) ?? "created"}`
  );
  const {
    data: dataSubs,
    getData: getDataSubs,
    loading: loadingSubs,
    refreshData: refreshSubs,
  } = useAxiosGet<SubscriptionAll>(
    `/plan/subscription?status=${
      (listAdmin && listAdmin[selectItem]?.get) ?? "Requested"
    }`
  );

  // subscription
  const { putData, loading: loadingPut } = useAxiosPut();

  useEffect(() => {
    if (membership?.docs && membership?.docs?.length > 0) {
      setSelectedMembership(membership?.docs[0]);
    }
  }, [membership]);
  useEffect(() => {
    const list = listItemAdmin.filter((item) => item.type === type);
    setListAdmin(list);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchResults = async (searchQuery: string) => {
    //aqui buscar
    console.log("sssss", searchQuery);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedFetchResults = useCallback(
    debounce((searchQuery) => {
      fetchResults(searchQuery);
    }, 500),
    []
  );
  const onSearch = (text: string) => {
    setQuery(text);
    debouncedFetchResults(text);
  };

  useEffect(() => {
    type === "work" && getData();
    type === "user" && getDataSubs();
    // type === 'user' && getDataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectItem]);
  const showDialog = (item: Work) => {
    setSelectedItem(item);
    setVisibleDialog(true);
  };
  const showDialogMembership = (item: Subscription) => {
    setSelectedItemM(item);
    setVisibleDialogM(true);
  };
  const addDays = (days: number) => {
    return moment(new Date()).add(days, "days").toDate();
  };
  const onPressAcept = () => {
    setVisibleDialog(false);
    const body = {
      status: "approved",
      date: {
        dateCreated: Date.now(),
        dateExpired: addDays(selectedItem?.idMembership?.duration ?? 0),
      },
    };

    if (selectedItem) {
      putData(`/works/${selectedItem._id}`, body).then(() => {
        refreshData();

        showMessage({
          message: "Felicidades!!",
          description: "Anuncio Aceptado",
          type: "success",
          icon: "success",
        });
      });
    }
  };

  const onPressAceptMembership = () => {
    setVisibleDialogM(false);

    if (selectedItemM) {
      const body = {
        status: "active",
        startDate: Date.now(),
        endDate: new Date(
          new Date().setDate(
            new Date().getDate() + selectedItemM.planDetails.duration
          )
        ),
      };
      putData(`plan/subscription/${selectedItemM._id}`, body).then(() => {
        refreshData();

        showMessage({
          message: "Felicidades!!",
          description: "Membresia Aceptada",
          type: "success",
          icon: "success",
        });
      });
    }
  };
  const handleEditEmploye = (item: Work) => {
    const newData: bodyCreate = {
      _id: item._id,
      calculableAmount: item.typeEmploye.calculableAmount ?? false,
      categorySelect: item.category.name,
      description: item.description,
      idCategory: item.category._id,
      idEmploye: item.typeEmploye._id,
      idMembership: item.idMembership._id,
      membership: item.idMembership,
      position: item.title,
      salary: String(item.price),
      typeEmploye: item.typeEmploye.name,
      quantity: 1,
    };
    navigation.navigate("ConfigureEmploye", {
      navigation: navigation,
      data: newData,
      edit: true,
    });
  };
  const handleOpenEmployeSheet = (item: Work) => {
    if (!membership) {
      getMembership();
    }
    setSelectedItem(item);

    setOpenMembershipBtnSheet(true);
  };
  const pressSelectMembership = (selected: Membership) => {
    const body = {
      status: "approved",
      date: {
        dateCreated: Date.now(),
        dateExpired: addDays(selected.duration ?? 0),
      },
    };

    if (selectedItem) {
      putData(`/works/${selectedItem._id}`, body).then(() => {
        refreshData();
        setOpenMembershipBtnSheet(false);
        showMessage({
          message: "Felicidades!!",
          description: "Membresia Renovada",
          type: "success",
          icon: "success",
        });
      });
    }
    // if (selectedItem) {
    //   const body = {
    //     status: 'active',
    //     startDate: Date.now(),
    //     endDate: new Date(
    //       new Date().setDate(new Date().getDate() + selected?.duration),
    //     ),
    //   };
    //   putData(`plan/subscription/${selected._id}`, body).then(() => {
    //     refreshData();
    //     setOpenMembershipBtnSheet(false);

    //   });
    // }
  };
  return {
    listAdmin,
    selectItem,
    setSelectItem,
    query,
    onSearch,
    listData,
    onPressAcept,
    visibleDialog,
    setVisibleDialog,
    showDialog,
    loading,
    loadingPut,
    dataSubs,
    loadingSubs,
    refreshSubs,
    showDialogMembership,
    onPressAceptMembership,
    visibleDialogM,
    setVisibleDialogM,
    handleEditEmploye,
    openMembershipSheet,
    setOpenMembershipBtnSheet,
    membership,
    loadingMembership,
    pressSelectMembership,
    selectMembership,
    handleOpenEmployeSheet,
  };
};
