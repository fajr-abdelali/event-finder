import EventFinder from './components/EventFinder/EventFinder';
import { ConfigProvider } from 'antd';

function App() {
  return (
    // Apply custom theme to all Ant Design components
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