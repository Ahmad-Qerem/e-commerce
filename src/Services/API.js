/* export const GetProductPyID = ({ ID, SetProduct }) => {
  const Response = axios.get(URL + "products/" + ID);
  return Response;
};

export const GetAllCategories = ({ SetCategories }) => {
  return axios.get(URL + "products/" + "categories").then((Response) => {
    console.log("Get All Categories", Response.data);
    SetCategories(Response.data);
  });
};

export const GetProductsInASpecificCategory = ({
  Category,
  SetProductsByCategory,
}) => {
  return axios
    .get(URL + "products/" + "category/" + Category)
    .then((Response) => {
      console.log("Get All Products in Category", Response.data);
      SetProductsByCategory(Response.data);
    });
};
 */
