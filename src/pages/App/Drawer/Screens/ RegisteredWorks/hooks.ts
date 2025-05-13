import { useEffect } from "react";
import { showMessage } from "react-native-flash-message";
import useAxiosGet from "../../../../../services/apiGet";
import useAxiosPut from "../../../../../services/apiPut";
import { Categories, Work } from "../../../../Search/types";
import { RegisteredWorksProps } from "./types";

export const useRegisteredWorks = ({}: RegisteredWorksProps) => {
  const { data, getData, loading, refreshData } = useAxiosGet<Categories>(
    "/works?status=created"
  );
  const { putData, loading: loadingPut } = useAxiosPut();

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressAcept = (item: Work) => {
    console.log("item", item);
    const body = {
      status: "approved",
    };
    putData(`/works/${item._id}`, body).then(() => {
      refreshData();

      showMessage({
        message: "Felicidades!!",
        description: "Anuncio Aceptado",
        type: "success",
        icon: "success",
      });
    });
  };

  return { data, loading, refreshData, onPressAcept, loadingPut };
};
