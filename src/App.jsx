import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  return (
    <main className="h-screen flex gap-8">
      <ProjectSidebar></ProjectSidebar>
      <NoProjectSelected></NoProjectSelected>
    </main>
  );
}

export default App;
