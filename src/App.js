
import React from 'react';
import {EventProvider} from "./components/context/events.context"
import Layout from "./components/layout/layout"
import EventTracker from "./components/organism/eventTracker"
function App() {
  return (
    <EventProvider>
      <Layout>
        <EventTracker/>
      </Layout>
    </EventProvider>
  );
}

export default App;
