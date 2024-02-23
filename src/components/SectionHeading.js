export default function SectionHeading({ children }) {
  return (
    <div className="flex w-auto">
      <h2 className="mr-4">{children}</h2>
      <span className="flex-col gap-y-px">
        <hr className="w-auto h-1 bg-red-500" />
        <hr className="w-auto h-1 bg-gray" />
        <hr className="w-auto h-1 bg-green-500" />
      </span>
    </div>
  );
}

