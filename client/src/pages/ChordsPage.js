import React, { useState, useEffect } from 'react';
import { Link, Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { Chord } from 'tonal';

const ChordsPage = () => {
  const chordSymbols = [
    'C', 'Dm', 'G7', 'Fmaj7', 'Amin7',
    'Bmaj7', 'C#m', 'D7', 'Emaj7', 'F#min7',
    'Gmaj7', 'A#m', 'B7', 'Cmin7', 'D#maj7',
    'Emin', 'F#7', 'G#maj7', 'Amin', 'Bb7',
  ];
  

  const [chords, setChords] = useState([]);

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

  return (
    <Box className="chords-page" padding={5}>
      <Heading as="h2" size="lg" marginBottom={5}>
        Explore Chords
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {chords.length > 0 ? (
          chords.map((chord, index) => (
            <Box key={index} className="chord-item" padding={4} borderWidth={1} borderRadius="md">
              <Link to={`/chords/${chord.name}`}>
                <Heading as="h3" size="md">{chord.name}</Heading>
                <Text>Notes: {chord.notes}</Text>
                {/* You may also include a visual representation or interactive play button for the chord */}
              </Link>
            </Box>
          ))
        ) : (
          <Text>Loading chords...</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ChordsPage;
