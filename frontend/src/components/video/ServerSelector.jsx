import React from 'react';

const ServerSelector = ({ servers, selectedServer, onServerChange }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-3">Select Server</h3>
      <div className="flex flex-wrap gap-2">
        {servers.map((server, index) => (
          <button
            key={index}
            onClick={() => onServerChange(index)}
            className={`px-4 py-2 rounded ${
              selectedServer === index
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {server.server}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServerSelector;