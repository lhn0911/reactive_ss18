import axiosInstance from "@/utils/axiosInstance";

export const getAllProducts = async () => {
  const response = await axiosInstance.get("/products/all");

  return response.data.data;
};

export const getProductById = async (id: number) => {
  const response = await axiosInstance.get(`/products/${id}`);
  return response.data;
};
