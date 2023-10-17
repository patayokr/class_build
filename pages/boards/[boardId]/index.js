import { useRouter } from "next/router";

export default function BoardPage() {
  const router = useRouter();
  return (
    <>
      <div>안녕하세요 게시판 상세 동적페이지입니다.</div>
      <div>게시글 아이디:{router.query.boardId}</div>
    </>
  );
}

// export const getServerSideProps = ()=>{
// //만약 서버사이드 랜더링을 하는 페이지라면 => out 폴더로 생성 불가
// //이런경우 next.confing.js에서 exportPathMap으로 export할 페이지에서 제외해야 한다

// }
