export default function BrickWallContainer({ children, className }) {
  return (
    <div className=" w-full bg-cyan-50 py-12 heropattern-brickwall-sky-300/50">
      <div
        className={`rounded border bg-sky-800 bg-opacity-80 py-12 ${className} `}
      >
        {children}
      </div>
    </div>
  );
}
