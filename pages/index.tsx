import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../components/GlobalStyles';
import questions from '../questions.json';
import Poll from '../components/Poll';

const IndexPage = styled.div``;

const rehydratedContent = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <Poll qandas={questions} />;
};

export default () => (
  <IndexPage>
    <GlobalStyles />
    <h1>Fullstack.io React Poll Challenge</h1>
    <p>
      Here is some text that is on the page in a paragraph tag. The poll will
      appear within this context below.
    </p>
    {rehydratedContent()}
    <p>
      Here is the rest of the text on the page. We just have something down here
      for context to see it in.
    </p>
  </IndexPage>
);

/**
 * TIPS:
 *
 * You can load the check image like this:
 *
 *    <img src={require('../static/check-circle.svg')} />
 *
 */
