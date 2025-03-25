const LoadMoreIndicator = ({ ref }: { ref: (node?: Element | null) => void }) => (
    <div ref={ref} className="h-10 mt-4 flex justify-center">
      <p>Loading more...</p>
    </div>
  );
  
  export default LoadMoreIndicator;
  