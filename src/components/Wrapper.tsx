interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export default function Wrapper({ children, className = "" }: Props) {
  return (
    <div
      className={
        "mx-auto flex w-full max-w-7xl items-center justify-center px-4 " +
        className
      }
    >
      {children}
    </div>
  )
}
