
export default function BrickWallContainer({children, className}) {
  return (
    <div className=" py-32 heropattern-brickwall-sky-300/50 bg-slate-600 w-full">
        <div className={`py-12 bg-sky-800 bg-opacity-50 border rounded ${className} `}>
            {children}
        </div>
    </div>

  )
}
