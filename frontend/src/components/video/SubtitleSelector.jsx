import React from 'react';

const SubtitleSelector = ({ subtitles, selectedSubtitle, onSubtitleChange }) => {
  const subtitleOptions = [
    { value: 'off', label: 'Off' },
    ...subtitles.map(sub => ({
      value: sub.language,
      label: sub.language.toUpperCase()
    }))
  ];

  return (
    <select
      value={selectedSubtitle}
      onChange={(e) => onSubtitleChange(e.target.value)}
      className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-white"
    >
      {subtitleOptions.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SubtitleSelector;