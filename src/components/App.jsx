import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { fetchImages, fetchImagesByQuery } from "src/api/imagesApi";

import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageModal from "./ImageModal/ImageModal";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Toaster from "./Toaster/Toaster";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const onSearch = (value) => {
    if (value !== searchQuery) {
      setSearchQuery(value);
      setPage(1);
      setImages([]);
      setTotalPages(0);
    }
  };

  const onImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        if (searchQuery) {
          const { results, total_pages } = await fetchImagesByQuery(
            searchQuery,
            page
          );
          setTotalPages(total_pages);
          setImages((prevImages) => [...prevImages, ...results]);
        } else {
          const results = await fetchImages();
          setImages(results);
        }
      } catch (e) {
        setIsError(true);
        toast.error("Oops, an error occured!");
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [searchQuery, page]);

  return (
    <>
      <SearchBar onSubmit={onSearch} />

      <div className="container">
        {!!images.length && (
          <ImageGallery imageList={images} onImageClick={onImageClick} />
        )}

        {isError && (
          <ErrorMessage
            message="Something went wrong. We couldn't fetch images at the moment. Try
        again later"
          />
        )}

        {!!images.length && !isLoading && totalPages > page && (
          <LoadMoreBtn onLoadMore={onLoadMore} />
        )}

        {isLoading && <Loader />}

        {!isLoading && !images.length && !isError && (
          <ErrorMessage message="There is no images matching your search" />
        )}
      </div>

      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          image={modalImage}
          closeModal={closeModal}
        />
      )}

      <Toaster />
    </>
  );
}

export default App;
