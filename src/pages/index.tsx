import { BiChevronDown } from "react-icons/bi";
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
        <main className="col-span-8 h-full w-full border-r border-gray-300 px-24">
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
          <div className="flex w-full items-center justify-between border-b-2 border-gray-200 px-10 py-5">
            <div className="text-gray-900">Articles</div>
            <div className="flex items-center space-x-2 rounded-3xl border border-gray-400 px-4 py-2 text-sm font-semibold">
              <span>Following</span>
              <span className="text-lg">
                <BiChevronDown />
              </span>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center space-y-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col border-b p-5 last:border-none"
              >
                <div className="grid-col-12 grid w-full grid-cols-12 ">
                  <div className="col-span-8 text-gray-600">
                    <h1 className="text-2xl font-bold">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla, eligendi minus beatae eius eaque at?
                    </h1>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illum nesciunt explicabo assumenda quas, doloribus quasi est
                    voluptatibus nam consectetur dignissimos quae ducimus enim,
                    et quo minima incidunt nemo minus. Tenetur! Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Illum nesciunt
                    explicabo assumenda quas, doloribus quasi est voluptatibus
                    nam consectetur dignissimos quae ducimus enim, et quo minima
                    incidunt nemo minus. Tenetur!
                  </div>
                  <div className="col-span-4 h-full w-full rounded-xl bg-gray-300 p-5"></div>
                </div>
                <div>
                  <div className="flex w-full items-center ">
                    <div>My topics:</div>
                    <div className="flex items-center gap-x-2 ">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex flex-col space-y-5 ">
                          <div className="flex h-10 w-20 items-center justify-center rounded-3xl bg-gray-300 p-5">
                            {index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        <aside className="col-span-4 h-full w-full">
          this is used for side bar
        </aside>
      </section>
    </div>
  );
}
