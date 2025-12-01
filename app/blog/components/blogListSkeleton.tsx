export default function BlogListSkeleton() {
     return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 animate-pulse h-40 rounded-lg"
          />
        ))}
      </div>
  );
}
