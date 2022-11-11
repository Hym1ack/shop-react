import ContentLoader from "react-content-loader";

function ProductSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={304}
      height={406}
      viewBox="0 0 304 406"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="304" height="406" />
    </ContentLoader>
  );
}

export default ProductSkeleton;
