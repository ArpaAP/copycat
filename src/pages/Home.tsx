import { faSearch, faShirt, faSocks } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home: React.FC = () => {
  return (
    <>
      <div className="bg-zinc-800 py-20">
        <div className="container mx-auto lg:px-28">
          <div className="flex gap-3 items-center h-12 mb-5">
            <input
              type="text"
              className="w-full outline-none bg-zinc-900 px-3 py-2 text-2xl font-semibold placeholder:text-zinc-600 h-full rounded-lg"
              placeholder="의상 또는 연예인 검색"
            />
            <button
              type="button"
              className="h-full whitespace-nowrap my-auto bg-zinc-900 px-4 text-lg font-semibold rounded-lg hover:bg-zinc-700 transition-all"
            >
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              검색하기
            </button>
          </div>

          <div className="flex justify-center items-center gap-5">
            <h1 className="text-3xl font-bold py-5 whitespace-nowrap">
              ✨ 당신을 위한 추천
            </h1>
            <hr className="border-zinc-600 w-full" />
          </div>
          <div className="grid grid-cols-4 gap-8 mb-10">
            {Array.from(Array(5).keys()).map((i) => (
              <div
                className="h-60 shadow-xl bg-zinc-600 rounded-lg fadeInUp"
                style={{ animationDelay: `${i * 100}ms` }}
              ></div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-5">
            <h1 className="text-3xl font-bold py-5 whitespace-nowrap">
              🏷 태그로 찾아보기
            </h1>
            <hr className="border-zinc-600 w-full" />
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              type="button"
              className="px-3 py-2 bg-zinc-900 rounded-lg text-lg font-semibold shadow-lg fadeInUp hover:bg-zinc-700 transition-all"
              style={{ animationDelay: "0" }}
            >
              <FontAwesomeIcon icon={faShirt} className="mr-2" />
              #태그 1
            </button>
            {Array.from(Array(9).keys()).map((i) => (
              <button
                type="button"
                className="px-3 py-2 bg-zinc-900 rounded-lg text-lg font-semibold shadow-lg fadeInUp hover:bg-zinc-700 transition-all"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <FontAwesomeIcon icon={faSocks} className="mr-2" />
                #태그 {i + 2}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
