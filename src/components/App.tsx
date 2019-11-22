import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroll-component';

import Container from './Container';

interface ImageType {
  id: string
  urls: {
    small: string
  }
}

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState<number>(1);

  const getImages = async (items = 5, page = 1) => {
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=${items}&page=${page}&query=minimal&client_id=${process.env.REACT_APP_KEY}`);
    const json = await response.json();
    const res = json.results;

    const newImages = [...images, ...res];

    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []);

  const masonryOptions = {
    transitionDuration: 0,
    gutter: 10,
    fitWidth: true
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={images.length}
        next={() => {
          getImages(5, page + 1);
          setPage(page + 1);
        }}
        hasMore
        loader={<span>Loading</span>}>
        <Masonry
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
          {
            images.map((image: ImageType) => {
              return (
                <img style={{ marginBottom: "10px" }} src={image.urls.small} />
              )
            })
          }
        </Masonry>
      </InfiniteScroll>
    </Container>
  );
}

export default App;
