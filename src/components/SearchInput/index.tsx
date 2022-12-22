import {  useContext, useState } from "react";
import { toast } from "react-toastify";
import SearchButton from "../../assets/img/buttonSearch.svg";
import { iSearchInputProps } from "../../entities/iSearchInputProps";
import {  ProductsContext } from "../../providers/ProductsContext";
import { StyledSearchInput } from "./style";

export const SearchInput = ({
  isClicked,
  callbackOnBlur,
}: iSearchInputProps) => {
  const { setFilteredProduct, products } =
    useContext(ProductsContext);

  const [isFocused, setIsFocused] = useState(false);
  const [filter, setFilter] = useState("");

  const updateFilter = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(target.value)
  }

  const searchProduct = () => {
    if(filter === "") {
        return setFilteredProduct(products)
    }


    let filteredList = products.filter(searchedProduct => {
        const nameContains = searchedProduct.name.toUpperCase().includes(filter.toUpperCase())
        const categoryContais = searchedProduct.category.toUpperCase().includes(filter.toUpperCase())
        return nameContains || categoryContais
    });

    if (filteredList.length === 0) {
        toast("Produto não encontrado")
        setFilteredProduct(products)
    } else {
        setFilteredProduct(filteredList)
    }
  }

  return (
    <StyledSearchInput
      isFocused={isFocused}
      isClicked={isClicked}
      callbackOnBlur={callbackOnBlur}
    >
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          callbackOnBlur();
        }}
        onChange={updateFilter}
      />
      <div onClick={searchProduct} >
        <img src={SearchButton} alt="Ícone de lupa em fundo verde" />
      </div>
    </StyledSearchInput>
  );
};
