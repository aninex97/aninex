import React, { useState, useEffect } from 'react';
import { api, testConnection } from '../../services/api';

const ConnectionTest = () => {
  const [status, setStatus] = useState('testing');
  const [backendInfo, setBackendInfo] = useState(null);

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      setStatus('testing');
      
      // Test basic connection
      const response = await api.get('/health');
      setBackendInfo(response.data);
      setStatus('connected');
      
      console.log('✅ Backend connection successful:', response.data);
    } catch (error) {
      setStatus('error');
      console.error('❌ Backend connection failed:', error);
    }
  };

  const testApiEndpoints = async () => {
    try {
      // Test anime endpoint
      const animeResponse = await api.get('/anime');
      console.log('✅ Anime endpoint working:', animeResponse.data);
      
      // Test auth endpoint
      const authResponse = await api.get('/api');
      console.log('✅ API endpoint working:', authResponse.data);
      
      alert('All API endpoints are working!');
    } catch (error) {
      console.error('❌ API test failed:', error);
      alert('Some API endpoints are failing. Check console for details.');
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-gray-800 border rounded-lg p-4 shadow-lg">
      <div className="flex items-center space-x-2 mb-2">
        <div className={`w-3 h-3 rounded-full ${
          status === 'connected' ? 'bg-green-500' : 
          status === 'error' ? 'bg-red-500' : 'bg-yellow-500'
        }`}></div>
        <span className="text-sm font-medium">
          Backend: {status === 'connected' ? 'Connected' : status === 'error' ? 'Error' : 'Testing...'}
        </span>
      </div>
      
      {backendInfo && (
        <div className="text-xs text-gray-400">
          <div>DB: {backendInfo.database}</div>
          <div>Env: {backendInfo.environment}</div>
        </div>
      )}
      
      <button 
        onClick={checkConnection}
        className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded"
      >
        Retest
      </button>
      
      <button 
        onClick={testApiEndpoints}
        className="mt-1 text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded block w-full"
      >
        Test All APIs
      </button>
    </div>
  );
};

export default ConnectionTest;
