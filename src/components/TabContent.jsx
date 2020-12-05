import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import ReviewTime from './ReviewTime';
import PRsOpened from './PRsOpened';

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
        className="tab-header"
      >
        <Tab label="Review time" />
        <Tab label="PRs created" />
      </Tabs>
      {value === 0 &&
        <ReviewTime />
      }
      {value === 1 &&
        <PRsOpened />
      }
    </div>
  );
}

export default TabContent;

        