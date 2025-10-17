import React from 'react';

const SEOEditor = ({ template, onChange }) => {
  const shortcodes = ['[title]', '[plot]', '[genre]', '[actors]', '[rating]', '[country]', '[slug]', '[year]'];

  const insertShortcode = (code) => {
    const textarea = document.getElementById('seo-template');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = template.substring(0, start) + code + template.substring(end);
    onChange(newText);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        SEO Template
      </label>
      
      <div className="mb-3">
        <p className="text-sm text-gray-600 mb-2">Available shortcodes:</p>
        <div className="flex flex-wrap gap-2">
          {shortcodes.map(code => (
            <button
              key={code}
              type="button"
              onClick={() => insertShortcode(code)}
              className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm hover:bg-gray-300"
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      <textarea
        id="seo-template"
        value={template}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        placeholder="Enter SEO template with shortcodes..."
      />
    </div>
  );
};

export default SEOEditor;