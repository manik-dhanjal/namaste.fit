
import React from 'react';
import {EventProvider} from "./components/context/events.context"
import Layout from "./components/layout/layout"
function App() {
  return (
    <EventProvider>
      <Layout>
          this is layout
      </Layout>
    </EventProvider>
  );
}

export default App;
