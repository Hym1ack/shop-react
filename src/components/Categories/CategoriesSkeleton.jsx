import ContentLoader from "react-content-loader";

function CategoriesSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={962}
      height={45}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="20" ry="20" width="962" height="45" />
    </ContentLoader>
  );
}

export default CategoriesSkeleton;
