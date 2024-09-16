import React, { useEffect, useState } from 'react';
import { List, ListItem } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const BodyPartsComponent = () => {
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      if (Array.isArray(bodyPartsData)) {
        setBodyParts(bodyPartsData);
      } else {
        console.error('Expected an array but got:', bodyPartsData);
        setBodyParts([]);
      }
    };

    fetchBodyParts();
  }, []);

  return (
    <div>
      {bodyParts.length > 0 ? (
        <List>
          {bodyParts.map((part, index) => (
            <ListItem key={index}>{part}</ListItem>
          ))}
        </List>
      ) : (
        <p>No body parts available.</p>
      )}
    </div>
  );
};

export default BodyPartsComponent;
