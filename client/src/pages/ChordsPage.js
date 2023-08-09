import React, { useState, useEffect } from 'react';
import { Button, Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { Chord } from 'tonal';

const ChordsPage = () => {
  const chordSymbols = [
    'C', 'Dm', 'G7', 'Fmaj7', 'Amin7',
    'Bmaj7', 'C#m', 'D7', 'Emaj7', 'F#min7',
    'Gmaj7', 'A#m', 'B7', 'Cmin7', 'D#maj7',
    'Emin', 'F#7', 'G#maj7', 'Amin', 'Bb7',
  ];
  

  const [chords, setChords] = useState([]);
  const [progression, setProgression] = useState([]);

  useEffect(() => {
    const fetchedChords = chordSymbols.map((symbol) => {
      const { notes } = Chord.get(symbol);
      return {
        name: symbol,
        notes: notes.join(', '),
      };
    });

    setChords(fetchedChords);
  }, []);

  const addChord = (chord) => {
    if (progression.length < 4) {
      setProgression([...progression, chord]);
    }
  };

  const removeChord = (index) => {
    setProgression(progression.filter((_, i) => i !== index));
  };

  return (
    <Box className="chords-page" padding={5}>
      <Heading as="h2" size="lg" marginBottom={5}>
        Explore Chords
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {chords.map((chord, index) => (
          <Box key={index} className="chord-item" padding={4} borderWidth={1} borderRadius="md">
            <Button onClick={() => addChord(chord)}>
              <Heading as="h3" size="md">{chord.name}</Heading>
              <Text>Notes: {chord.notes}</Text>
            </Button>
          </Box>
        ))}
      </SimpleGrid>
      <Heading as="h2" size="lg" marginBottom={5} marginTop={5}>
        Chord Progression Builder
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
        {progression.map((chord, index) => (
          <Box key={index} className="progression-item" padding={4} borderWidth={1} borderRadius="md">
            <Text>{chord.name}</Text>
            <Text>Notes: {chord.notes}</Text>
            <Button onClick={() => removeChord(index)}>Remove</Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ChordsPage;