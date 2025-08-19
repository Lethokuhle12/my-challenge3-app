import { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { LinkGrid } from "./Components/LinkCard/LinkGrid";
import { LinkForm } from "./Components/LinkForm/LinkForm";


type Link = {
  id: number;
  name: string;
  url: string;
  description: string;
  tag: string;
};
function App() {



  const [links, setLinks] = useState<Link[]>([
   
  ]);

  const [isLinkFormVisible, setShowLinkForm] = useState(false);

  const handleAddLink = (link: Omit<Link, "id">) => {
    setLinks((prev) => [...prev, { ...link, id: Date.now() }]);
  };

  const handleDelete = (id: number) => {
    setLinks((prev) => prev.filter((l) => l.id !== id));
  };

  const handleUpdate = (id: number, updatedLink: Omit<Link, "id">) => {
    setLinks((prev) =>
      prev.map((link) => (link.id === id ? { ...updatedLink, id } : link))
    );
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Navbar setSearchTerm={setSearchTerm} showLinkForm={() => setShowLinkForm(true)} />
      <LinkGrid  searchTerm={searchTerm} links={links} onUpdate={handleUpdate} onDelete={handleDelete} />
      <LinkForm
        isVisible={isLinkFormVisible}
        close={() => setShowLinkForm(false)}
        onAddLink={handleAddLink}
      />
    </>
  );
}

export default App;
