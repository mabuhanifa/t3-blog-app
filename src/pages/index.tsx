import { BsBell } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { RiMenuFill } from "react-icons/ri";
import { TfiSearch } from "react-icons/tfi";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col ">
      <header className="flex h-20 w-full flex-row items-center justify-around border-b border-gray-300">
        <div>
          <RiMenuFill className="text-2xl" />
        </div>
        <div>Ultimate Blog App</div>
        <div className="flex items-center space-x-2">
          <div>
            <BsBell className="text-2xl text-gray-600" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-500"></div>
          </div>
          <div>
            <button className="flex items-center justify-center space-x-3 rounded border border-gray-200 bg-[#e3e7f0] px-4 py-2 text-gray-600 hover:bg-gray-600 hover:text-gray-100">
              <div>Write</div>
              <div>
                <FiEdit className="text-2xl" />
              </div>
            </button>
          </div>
        </div>
      </header>
      <section className="grid h-full w-full grid-cols-12 place-items-center px-20">
        <main className="col-span-8 h-full w-full border-r border-gray-300">
          <div className="flex w-full items-center justify-between p-4">
            <div className="relative flex items-center space-x-4">
              <label className="absolute left-8 top-3.5 text-base text-gray-700">
                <TfiSearch />
              </label>
              <input
                type="text"
                name="search"
                id="search"
                className="w-full rounded-3xl border border-gray-500 px-10 py-2 outline-none placeholder:text-sm placeholder:font-light placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-x-3">
              <div>My Topics: </div>
              <div className="flex items-center gap-x-5 ">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex h-10 w-20 items-center justify-around rounded-full bg-black/[.15] p-2"
                  >
                    <div>{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div></div>
        </main>
        <aside className="col-span-4 h-full w-full">
          this is used for side bar
        </aside>
      </section>
    </div>
  );
}
