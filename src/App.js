import { createContext, useState } from "react";
import ApiTest from "./components/ApiTest";
import Images from "./components/Images"
import Jumbotron from "./components/Jumbotron"
import SearchField from "./components/SearchField"
import useAxios from "./hooks/useAxios"

//Create Context
export const ImageContext = createContext();

function App() {

  const [searchImage, setSearchImage] = useState("");

  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  // console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField></SearchField>
      </Jumbotron>
      <Images></Images>


    </ImageContext.Provider>
  )
}

export default App