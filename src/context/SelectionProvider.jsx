// src/context/SelectionProvider.jsx
import React, { useState } from 'react';
import { SelectionContext } from './selectionContext';

export const SelectionProvider = ({ children }) => {
  const [selection, setSelection] = useState({
    country: null,
    location: null,
    spot: null,
  });

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <SelectionContext.Provider value={{ selection, setSelection, drawerOpen, setDrawerOpen }}>
      {children}
    </SelectionContext.Provider>
  );
};

