import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    " text-sm inline-block rounded-full bg-yellow-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const style = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 ",
    small: base + " text-small px-3 py-2 md:px-5 md:py-2.5 ",
    round: base + " text-small px-2 py-1 md:px-3 md:py-2 ",
    secondary:
      "border-2 bg-transparent border-stone-300 px-3 py-2 md:px-4 md:py-3 focus:text-stone-700 focus:ring-stone-400 text-stone-400 hover:bg-stone-300 hover:text-slate-700 focus:bg-stone-400 text-sm inline-block rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 focus:outline-none focus:ring focus:ring-offset-2 disabled:cursor-not-allowed",
  };

  if (to)
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <div>
        <button disabled={disabled} onClick={onClick} className={style[type]}>
          {children}
        </button>
      </div>
    );

  return (
    <div>
      <button disabled={disabled} className={style[type]}>
        {children}
      </button>
    </div>
  );
}

export default Button;
