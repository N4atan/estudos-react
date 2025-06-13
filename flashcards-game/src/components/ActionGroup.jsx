export default function ActionGroup(Props) {
  return (
    <footer className="w-4/5 h-18 flex flex-row gap-20 items-center">
      <button
        onClick={Props.prevCard}
        className="h-12 bg-red-500 text-white px-5 rounded shadow-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
      >
        Last Card
      </button>

      {!Props.hideNext && (
        <button
          onClick={Props.nextCard}
          className="h-12 bg-emerald-500 text-white px-5 rounded shadow-xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
        >
          Next Card
        </button>
      )}
    </footer>
  );
}
