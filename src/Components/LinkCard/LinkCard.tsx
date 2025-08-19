import React, { useState } from "react";
import styles from "./LinkGrid.module.css";
import { Text } from "../Text/Text";

type LinkCardProps = {
  name: string;
  url: string;
  description: string;
  tag: string;
  onUpdate?: (updatedLink: { name: string; url: string; description: string; tag: string }) => void;
  onDelete?: () => void;
};

export const LinkCard: React.FC<LinkCardProps> = ({
  name,
  url,
  description,
  tag,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    name,
    url,
    description,
    tag,
  });

  const handleSave = () => {
    onUpdate?.(editValues);
    setIsEditing(false);
  };

  return (
    <div className={styles.card}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValues.name}
            onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
          />
          <input
            type="text"
            value={editValues.url}
            onChange={(e) => setEditValues({ ...editValues, url: e.target.value })}
          />
          <input
            type="text"
            value={editValues.description}
            onChange={(e) =>
              setEditValues({ ...editValues, description: e.target.value })
            }
          />
          <input
            type="text"
            value={editValues.tag}
            onChange={(e) => setEditValues({ ...editValues, tag: e.target.value })}
          />

          <button className={styles.updateBtn} onClick={handleSave}>
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <Text variant="h2">{name}</Text>
          <a href={url}>{url}</a>
          <Text variant="span">{description}</Text>
          <Text variant="span">{tag}</Text>

          <button
            className={styles.updateBtn}
            onClick={() => setIsEditing(true)}
          >
            Update
          </button>
          <button className={styles.updateBtn} onClick={onDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

