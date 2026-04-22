import axios from "axios";


function App() {
  const URL = "http://localhost:3000/api/list";
  const getList = () => {
    console.log("목록 데이터 요청...");

    axios.get(URL)
      .then((res) => {
        console.log("목록 데이터 응답:", res.data);
      })
      .catch((err) => {
        console.error("목록 데이터 요청 실패:", err);
      });
    
  }
  return (
    <>
      <h1>NCP 배포 서비스</h1>
      <button onClick={getList}
      >목록조회</button>
    </>
  )
}

export default App
