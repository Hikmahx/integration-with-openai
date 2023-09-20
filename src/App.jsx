import Search from "./components/Search";

function App() {
  return (
    <div className="App bg-slate-200 h-screen text-center">
      <div className="container relative py-8 px-20 w-full mx-auto">
        <h1 className="text-white relative z-10 mt-12 lg:mt-20 font-bold text-lg lg:text-2xl uppercase tracking-widest">OpenAI Integration with React</h1>
        <div className="absolute -top-2/3 -right-1/4 w-40 lg:w-80 h-40 lg:h-80 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute -top-[6rem] -right-[0%] w-40 lg:w-80 h-40 lg:h-80 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute -top-3/4 left-[3%] w-40 lg:w-80 h-40 lg:h-80 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute -top-[4rem] -right-[2%] w-20 lg:w-40 h-20 lg:h-40 rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute inset-x-0 -top-96 w-40 lg:w-[40rem] h-40 lg:h-[40rem] rounded-full bg-purple-600 blur-3xl mx-auto"></div>
        <div className="absolute -bottom-2/3 -left-1/4 w-40 lg:w-80 h-40 lg:h-80 rounded-full bg-purple-600 blur-3xl"></div>
      </div>
      <div className="container px-20 mx-auto">
        <h2 className="">Generate any article based on a topic of your choice</h2>
      </div>
      <Search />
    </div>
  );
}

export default App;
