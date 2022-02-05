import axiosInstance from ".";
import { useQuery, useMutation } from "react-query";
import { toast } from "react-toastify";

export const useQueryWrapper = (key: string, url: string, options?: any) => {
  const getAPICall = async () => {
    const { data: { data } } = await axiosInstance.get(url);
    return data;
  };
  return useQuery(key, getAPICall, options);
};


export const postRequest = async ({ url, data }) => {
  const response = await axiosInstance.post(url, data);
  return response?.data || response;
};

export const putRequest = async ({ url, data }) => {
  const response = await axiosInstance.put(url, data);
  return response?.data || response;
};
export const patchRequest = async ({ url, data }) => {
  const response = await axiosInstance.patch(url, data);
  return response?.data || response;
};

export const deleteRequest = async ({ url, data }) => {
  const config = { data };
  const response = await axiosInstance.delete(url, config);
  return response?.data || response;
};

// TODO: write JSDocs for this function
export const useMutationWrapper = (makeAPICall, onSuccess?, onError?): any => {
  return useMutation(makeAPICall, {
    onSuccess: (res) => {
      if (onSuccess) {
        onSuccess(res);
      }
    },

    onError: (error: any) => {
      if (onError) {
        onError(error);
      } else {
        const err = error as Record<any, any>;
        let message: any = err.response.data.errors;
        if (Array.isArray(message)) {
          message.map(errorMsg => toast.error(`${errorMsg ?? "An error occured"}`, {
            autoClose: message.length === 1 ? 5000 : false
          }));
        } else {
          toast.error(`${message ?? "An error occured"}`);
        }
      }
    },
  });
};

