
type Props = {}

function Pagination({ }: Props) {
  return (
    <div className="pt-5 border-t border-gray-200 border-opacity-30 sm:justify-between justify-center items-center gap-5 flex sm:flex-row flex-col w-full">
      <div className="Button justify-start items-start flex">
        <div className="ButtonBase justify-center items-center gap-2 flex">
          <div className="ArrowLeft w-5 h-5 relative" />
          <div className="Text text-zinc-100 text-sm font-medium leading-tight">Previous</div>
        </div>
      </div>
      <div className="PaginationNumbers justify-start items-start gap-0.5 flex">
        <div className="PaginationNumberBase w-10 h-10 bg-purple-50 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-neutral-900 text-sm font-medium leading-tight">1</div>
          </div>
        </div>
        <div className="PaginationNumberBase w-10 h-10 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-zinc-100 text-sm font-medium leading-tight">2</div>
          </div>
        </div>
        <div className="PaginationNumberBase w-10 h-10 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-zinc-100 text-sm font-medium leading-tight">3</div>
          </div>
        </div>
        <div className="PaginationNumberBase w-10 h-10 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-zinc-100 text-sm font-medium leading-tight">...</div>
          </div>
        </div>
        <div className="PaginationNumberBase w-10 h-10 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-zinc-100 text-sm font-medium leading-tight">8</div>
          </div>
        </div>
        <div className="PaginationNumberBase w-10 h-10 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-zinc-100 text-sm font-medium leading-tight">9</div>
          </div>
        </div>
        <div className="PaginationNumberBase w-10 h-10 rounded-lg justify-center items-center flex">
          <div className="Content grow shrink basis-0 self-stretch p-3 rounded-lg justify-center items-center inline-flex">
            <div className="Number text-center text-zinc-100 text-sm font-medium leading-tight">10</div>
          </div>
        </div>
      </div>
      <div className="Button justify-start items-start flex">
        <div className="ButtonBase justify-center items-center gap-2 flex">
          <div className="Text text-zinc-100 text-sm font-medium leading-tight">Next</div>
          <div className="ArrowRight w-5 h-5 relative" />
        </div>
      </div>
    </div>
  )
}

export default Pagination