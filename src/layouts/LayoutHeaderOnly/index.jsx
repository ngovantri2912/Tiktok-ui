import Header from "../components/Header";
function LayoutHeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default LayoutHeaderOnly;
