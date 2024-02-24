export default function SectionHeading({ children }) {
  return (
    <div className="relative flex items-start"> 
      <h2 className="grow-0 mx-1">{children}</h2>
      <span className="grow flex-col justify-between space-y-0.5">
        <hr className="h-1 bg-red-800 border-0"/>
        <hr className="h-1 bg-neutral-950 border-0"/>
        <hr className="h-1 bg-green-900 border-0"/>
      </span>
    </div>
  );
}

