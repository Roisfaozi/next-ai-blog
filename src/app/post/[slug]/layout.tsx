
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="py-[30px]">
      <div className="px-8 flex-col justify-start items-start gap-8 flex">
        {children}
      </div>
    </div>
  )
}