import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import ReviewTime from './ReviewTime';

const TabContent = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => setValue(val);
  return (
    <div className="tab-content">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
      >
        <Tab label="Review time" />
        <Tab label="PRs created" />
      </Tabs>
      {value === 0 &&
        <ReviewTime />
      }
    </div>
  );
}

export default TabContent;

        