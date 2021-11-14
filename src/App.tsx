import React, { useState } from 'react';
import dompurify from 'dompurify';
import marked from 'marked';

function App() {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => (
    setInput(e.target.value)
  );

  const createMarkup = (txt: string) => (
    { __html: dompurify.sanitize(marked.parse(txt, { breaks: true })) }
  );

  return (
    <div className="App">
      <div>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Write markdown here..."
        />
        <div dangerouslySetInnerHTML={createMarkup(input)} />
      </div>
    </div>
  );
}

export default App;
