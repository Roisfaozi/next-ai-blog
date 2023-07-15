type Props = {
  tag: string,
  color: string
}

function Tags({ tag, color }: Props) {

  return (
    <div className="justify-start items-start flex" >
      <div className={`px-2.5 py-0.5 bg-${color} rounded-2xl justify-center items-center flex`}>
        <p className={`text-center text-${color} text-sm font-medium leading-tight`}>{tag}</p>
      </div>
    </div >
  )
}

export default Tags