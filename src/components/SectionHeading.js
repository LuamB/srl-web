export default function SectionHeading({ children }) {
  return (
  <h2 className="text-3xl font-bold relative">
    {children}
    <span className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col gap-2">
      <span className="w-2 h-4 bg-red-500" />
      <span className="w-2 h-4 bg-black" />
      <span className="w-2 h-4 bg-green-500" />
    </span>
  </h2>
  );
};