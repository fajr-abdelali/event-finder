import EventFinder from './components/EventFinder/EventFinder';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6B48FF',
          borderRadius: 8,
        },
      }}
    >
      <EventFinder />
    </ConfigProvider>
  );
}

export default App;