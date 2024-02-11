import { Button1, Button2, Button3, Button4 } from "./components/Buttons";

const App = () => {
  return (
    <>
      <div>
        <Button1 color="#40A2D8">hi</Button1>
        <Button1 color="#0B60B0">hello</Button1>
        <Button1 color="#F3B95F">welcome</Button1>
        <br />
        <Button2 color="#D04848">hi</Button2>
        <Button2 color="#6895D2">hello</Button2>
        <Button2 color="#74E291">welcome</Button2>
        <br />
        <Button3 color="#211951">hi</Button3>
        <Button3 color="#836FFF" transformOrigin="left">hello</Button3>
        <Button3 color="#15F5BA" transformOrigin="right">welcome</Button3>
        <br />
        <Button4 color="#211951">hi</Button4>
        <Button4 color="#836FFF" transformOrigin="top">hello</Button4>
        <Button4 color="#15F5BA" transformOrigin="bottom">welcome</Button4>
      </div>
    </>
  );
}
export default App;