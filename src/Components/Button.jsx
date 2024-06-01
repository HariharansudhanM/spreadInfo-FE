export function Button({ children, handle, el, buttonState, toggle, target }) {
  //Initializing State}
  //Declaring handlers
  //Return JSX
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => handle(el)}
        disabled={buttonState}
        data-bs-toggle={toggle}
        data-bs-target={target}
      >
        {children}
      </button>
    </>
  );
}
