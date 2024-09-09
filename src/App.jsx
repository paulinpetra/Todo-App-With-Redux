function App() {
  return (
    <div className=" flex justify-center items-center font-sans bg-[#EED9c4] min-h-screen flex-col">
      <h1 className="text-[120px] font-bold text-black/5">Todo</h1>
      <main
        className="w-[972px] h-[636px] bg-white rounded-md shadow-md
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"
      >
        <header className="col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/10"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-[#fffefc] border-l border-black/10"></section>
      </main>
      <footer className="flex justify-between w-[972px] items-center text-[11px] opacity-20 mt-[12px]">
        <small>&copy; 2050. Copyright by PauLin</small>
        <p>
          Version <b>1.5</b>
        </p>
      </footer>
    </div>
  );
}

export default App;
