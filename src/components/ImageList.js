import ImageShow from './ImageShow';
import './ImageList.css';

const ImageList = ({ images }) => {
  const renderedImages = images.map(image => {
    return <ImageShow image={image} key={image.id} />;
  });

  return <div className="container">{renderedImages}</div>;
};

export default ImageList;
