import { useProtectedPage } from "../hook/useProtectedPage";

function FeedPage() {
  useProtectedPage()
  
  return (
    <main>
      <h1>Página de Feed</h1>
    </main>
  );
}

export default FeedPage;