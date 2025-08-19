import React, { useState } from "react";
import { Text } from "../Text/Text";
import { TextInput } from "../Input/TextInput";
import { Overlay } from "../Overlay/Overlay";
import styles from "./LinkForm.module.css";

type LinkFormProps = {
  close?: () => void;
  isVisible?: boolean;
  onAddLink: (link: { name: string; url: string; description: string; tag: string }) => void;
};

export const LinkForm: React.FC<LinkFormProps> = ({ close, isVisible, onAddLink }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !url) return; // simple validation

    onAddLink({ name, url, description, tag });

    // clear form
    setName("");
    setUrl("");
    setDescription("");
    setTag("");

    if (close) close();
  };

  if (!isVisible) return null;

  return (
    <Overlay close={close}>
      <form className={styles["LinkForm-contrainer"]} onSubmit={handleSubmit}>
        <Text variant="h2" style={{ color: "black" }}>
          Add a Link
        </Text>

        <TextInput label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextInput label="Url" name="url" value={url} onChange={(e) => setUrl(e.target.value)} />
        <TextInput
          label="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextInput label="Tag" name="tag" value={tag} onChange={(e) => setTag(e.target.value)} />

        <button style={{ marginTop: 20 }} type="submit">
          Add Link
        </button>
      </form>
    </Overlay>
  );
};
