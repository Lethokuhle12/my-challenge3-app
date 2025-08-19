import React, { useState } from "react";
import styles from "./LinkGrid.module.css";
import { LinkCard } from "./LinkCard";
import { ContentContainer } from "../ContentContainer";

type Link = {
  id: number;
  name: string;
  url: string;
  description: string;
  tag: string;
};

type LinkGridProps = {
  links: {

  id: number;
  name: string;
  url: string;
  description: string;
  tag: string;

  }[];
  onUpdate: (id: number, updatedLink: Omit<{ id: number; name: string; url: string; description: string; tag: string }, "id">) => void;
  onDelete: (id: number) => void;
  searchTerm?: string;
};

export const LinkGrid: React.FC<LinkGridProps> = ({ links,searchTerm ,onUpdate, onDelete }) => {

    const filteredLinks = links.filter((link) => {
    const lowerSearch = (searchTerm ?? "").toLowerCase();
    return (
      link.name.toLowerCase().includes(lowerSearch) ||
      link.url.toLowerCase().includes(lowerSearch) ||
      link.description.toLowerCase().includes(lowerSearch) ||
      link.tag.toLowerCase().includes(lowerSearch)
    );
  });

  return (
   
      <ContentContainer>

       <div id={styles['item-container']}>

        {filteredLinks.map((link)  => (
          <LinkCard
            key={link.id}
            name={link.name}
            url={link.url}
            description={link.description}
            tag={link.tag}
            onUpdate={(updatedLink) => onUpdate(link.id, updatedLink)}
            onDelete={() => onDelete(link.id)}
          />
        ))}

        
       </div>
        
        
      


    </ContentContainer>
   
  );
};
