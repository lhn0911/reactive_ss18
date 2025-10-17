import axiosInstance from "@/utils/axiosInstance";

export const getCarts = async () => {
  const response = await axiosInstance.get("/carts");
  return response.data;
};

export const addProductToCart = async (data: any) => {
  const response = await axiosInstance.post("/carts/add", data);
  return response.data;
};

export const updateQuantityCart = async ({
  id,
  ...data
}: {
  id: number;
  quantity: number;
}) => {
  const response = await axiosInstance.patch(`/carts/items/${id}`, data);
  return response.data;
};

export const deleteCartItem = async (cartItemId: number) => {
  const response = await axiosInstance.delete(`/carts/items/${cartItemId}`);
  return response.data;
};

export const deleteAllCart = async () => {
  const response = await axiosInstance.delete("/carts/clear");
  return response.data;
};
