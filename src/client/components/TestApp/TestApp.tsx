import * as React from 'react';
import GreebleBox from '../GreebleBox';
import PlayApp from '../PlayApp';
import * as styles from './TestApp.css';

interface TestAppState {
  smallText: boolean,
}

class TestApp extends React.Component<{}, TestAppState> {
  state: TestAppState = {
    smallText: true
  }


  render() {
    const { smallText } = this.state;

    return (
      <div className={styles.container}>
        <button onClick={() => this.setState({ smallText: !smallText })}>Change</button>
        <GreebleBox cutSize={50} corners={{ tr: true, br: false, tl: false, bl: true }} strokeWidth={3}>
          <div style={{ padding: '8px' }}>
            {smallText ?
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim.' :
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non elit eget arcu tempor semper in vitae tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean sed.'}
          </div>
        </GreebleBox>
        <Chat />
        <PlayApp />
      </div>
    );
  }
}

export default TestApp;

function Chat() {
  return (
    <div id="textchat-input" className={styles.chat}>
      <textarea name="" style={{width: '100%', height: '200px'}} ></textarea>
      <button>Submit</button>
    </div>
  )
}
