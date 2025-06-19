export default function HeroSectionSkeleton() {
  return (
    <div className="relative w-full h-screen bg-gray-200 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-8 max-w-2xl">
          <div className="h-12 bg-gray-300 rounded w-3/4 mb-6 mx-auto"></div>
          <div className="h-6 bg-gray-300 rounded w-full mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-5/6 mb-8"></div>
          <div className="h-12 bg-gray-300 rounded w-48 mx-auto"></div>
        </div>
      </div>
    </div>
  );
}