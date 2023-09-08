import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = [
  { id: uuidv4(), title: "Big Bellies", seen: false },
  { id: uuidv4(), title: "Lunar Landscape", seen: false },
  { id: uuidv4(), title: "Terracotta Army", seen: true }
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((newMyList) => {
        if (newMyList.id === artworkId) {
          return {
            ...newMyList,
            seen: nextSeen
          };
        } else {
          return newMyList;
        }
      })
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      yourList.map((newYourList) => {
        if (newYourList.id === artworkId) {
          return {
            ...newYourList,
            seen: nextSeen
          };
        } else {
          return newYourList;
        }
      })
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
