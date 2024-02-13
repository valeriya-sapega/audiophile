interface SkeletonProps {
  times: number;
}

const Skeleton = ({ times }: SkeletonProps) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div
          className='bg-greyBg w-full h-20 rounded animate-pulse mt-3'
          key={i}
        ></div>
      );
    });

  return boxes;
};
export default Skeleton;
