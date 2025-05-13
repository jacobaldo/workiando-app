import { useEffect } from "react";
import { showMessage } from "react-native-flash-message";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../provider/AuthProvider";
import { User } from "../../provider/types";
import { setSubscription } from "../../redux/Subscriptions/subscriptionAcction";
import useAxiosGet from "../../services/apiGet";
import useAxiosPost from "../../services/apiPost";
import { Subscription } from "../Search/types";
import { ExistingRequest, WorkDetailProps } from "./types";

export const useWorkDetail = ({ body, navigation }: WorkDetailProps) => {
  const {
    authState: { user: myUser },
  } = useUser();
  const {
    // subscription,
    status,
  } = useSelector((state: any) => state.subscription);
  const dispatch = useDispatch();
  const { loading: loadingPost, postData } = useAxiosPost();
  const {
    data: user,
    getData,
    loading,
    refreshData,
  } = useAxiosGet<User>(`/auth/${body.admin}`);
  const { data: existingRequest, getData: existingGetData } =
    useAxiosGet<ExistingRequest>(`/requests/${myUser?._id}/${body._id}`);

  useEffect(() => {
    existingGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    data: dataSubscription,
    getData: getDataSubscription,
    // loading: loadingSubscription,
    // refreshData: refreshSubscription,
  } = useAxiosGet<Subscription>(`/plan/membership/status/${myUser?._id}`);

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
    getDataSubscription();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dataSubscription && getSubscritionStatus();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSubscription]);

  useEffect(() => {
    body.admin && getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [body]);
  const myWork = () => {
    if (myUser?._id.toString() === body.admin.toString()) {
      return true;
    }
    return false;
  };
  const onPressApply = () => {
    const newBody = { userId: myUser?._id, worksId: body._id };

    if (status === "active") {
      postData("/requests", newBody).then(() => {
        showMessage({
          message: "Felicidades!!",
          description: "Solicitud exitosa...",
          type: "success",
          icon: "success",
        });

        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      });
    } else if (status === "inactive") {
      showMessage({
        message: "Error!!",
        description: "Tu Membresía esta inactiva o vencida",
        type: "danger",
        icon: "danger",
      });

      navigation.navigate("SuscribeMembershipUser", { navigation });
    } else {
      showMessage({
        message: "Error!!",
        description: "No tienes Membresía, Suscríbete",
        type: "danger",
        icon: "danger",
      });

      navigation.navigate("SuscribeMembershipUser", { navigation });
    }
  };

  return {
    user,
    loading,
    refreshData,
    onPressApply,
    loadingPost,
    existingRequest,
    myWork,
    status,
  };
};
