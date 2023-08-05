export default function ImageWrapLayout(props: ImageWrapLayoutProps) {
  const { image, content, imageLeft } = props;

  const imageComp = (
    <div className="col align-self-center">
      <img src={image} height={200} width={400} />
    </div>
  );

  return (
    <div className="container row justify-content-evenly">
      {imageLeft && imageComp}
      <div className="col">{content}</div>
      {!imageLeft && imageComp}
    </div>
  );
}

interface ImageWrapLayoutProps {
  image: string;
  content: JSX.Element;
  imageLeft: boolean;
}