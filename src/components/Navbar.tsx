const Navbar: React.FC = () => {
  return (
    <div className="p-3 bg-pink-400 shadow-xl">
      <nav className="flex items-center text-white">
        <a href="/">
          <img
          className="h-7 mr-2"
            src="https://see.fontimg.com/api/renderfont4/BWnRd/eyJyIjoiZnMiLCJoIjoxNTIsInciOjIwMDAsImZzIjo3NiwiZmdjIjoiI0Y4RjFGMSIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/Q29weSBDYXQ/stanley-personal-use.png"
          />
        </a> 

        <a href="/" className="px-2 mx-1">홈</a>
        <a href="/" className="px-2 mx-1">검색하기</a>
      </nav>
    </div>
  );
};

export default Navbar;
