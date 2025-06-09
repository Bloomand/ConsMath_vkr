export const getSubtitleByDifficulty = (difficulty) => {
    const subtitles = {
      '0': '1 min',
      '1': '3 min',
      '2': '4 min',
    };
    return `(${subtitles[difficulty] || ''})`;
  };
  