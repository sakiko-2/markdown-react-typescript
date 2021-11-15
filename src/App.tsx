import React, { useState } from 'react';
import dompurify from 'dompurify';
import marked from 'marked';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Wrapper = styled.div`
  display: grid;
  flex: 1;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 1rem;
  max-height: 100vh;
  padding: 1rem;

  @media (max-width: 576px) {
    grid-template: 1fr 1fr / 1fr;
  }
`;

const Preview = styled.div`
  overflow: auto;
`;

function App() {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => (
    setInput(e.target.value)
  );

  const createMarkup = (txt: string) => (
    { __html: dompurify.sanitize(marked.parse(txt, { breaks: true })) }
  );

  return (
    <StyledApp className="App">
      <Wrapper>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder="Write markdown here..."
        />
        <Preview dangerouslySetInnerHTML={createMarkup(input)} />
      </Wrapper>
    </StyledApp>
  );
}

export default App;
