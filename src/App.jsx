import "./App.css";
import Button from "./ui/button/Button";

function App() {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <Button
          variant="ghost"
          onClick={() => {
            console.log("hello");
          }}
          className="w-[500px]"
        >
          On click
        </Button>
      </div>
    </>
  );
}

export default App;
