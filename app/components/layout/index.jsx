import Nav from "../nav-footer/Nav";
//import "../../globals.css";

const Index = ({ children }) => {
  return (
    <div>
      <header>
        <Nav />
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default Index;
