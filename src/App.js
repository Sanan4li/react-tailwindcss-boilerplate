function App() {
  return (
    <div>
      <h1 className="text-center text-4xl p-2 m-2 font-semibold">
        React App with Tailwind CSS
      </h1>
      <p className="p-2 text-center ">
        Welcome to tailwind css with react. This is a boilerplate created with
        <a
          className="text-blue-400 p-1"
          href="https://reactjs.org/docs/create-a-new-react-app.html"
        >
          Create React App
        </a>
        and
        <a className="text-blue-400 p-1" href="https://tailwindcss.com/">
          Tailwind CSS
        </a>
        .
      </p>
      <h2 className="text-3xl p-1 mt-3 text-center font-semibold">
        {" "}
        How to use ?
      </h2>
      <p className="text-center">
        After cloning the repository. You can use the following commands to use
        this boilerplate.
      </p>
      <ul className="text-center mt-3">
        <li>
          <span className="font-semibold text-xl">npm start </span> : start the
          project
        </li>
        <li>
          <span className="font-semibold text-xl">npm build </span> :build the
          project
        </li>
        <li>
          <span className="font-semibold text-xl">npm run build-css </span>:
          build the output css file '<i>src/assets/css/index.css</i>'
        </li>
        <li>
          <span className="font-semibold text-xl">npm run watch-css </span>: JIT
          mode watch for changes and build the output css file '
          <i>src/assets/css/index.css</i>'
        </li>
      </ul>
    </div>
  );
}

export default App;
