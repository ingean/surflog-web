// src/components/Navigation.jsx
import React, { useState } from 'react';
import { List, ListItemButton, ListItemText, Collapse, Drawer } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useSelection } from '../hooks/useSelection';

const Navigation = ({ data }) => { // 'data' is your nested API response
  const { setSelection } = useSelection();
  const [openCountry, setOpenCountry] = useState(null);
  const [openLocation, setOpenLocation] = useState(null);

  const handleCountryClick = (countryName) => {
    setOpenCountry(openCountry === countryName ? null : countryName);
  };

  const handleLocationClick = (locName) => {
    setOpenLocation(openLocation === locName ? null : locName);
  };

  const handleSpotSelect = (country, location, spot) => {
    setSelection({ country, location, spot });
  };

  // Temporary function to adapt API data, should be fixed in new version of API
  data = data.map(c => {
    const countryName = Object.keys(c)[0]
    return {
      name: countryName,
      locations: c[countryName].map(l => {
        const locationName = Object.keys(l)[0]
        return {
          name: locationName,
          spots: l[locationName].map(s => {
            return {
              name: s
            }
          })
        }
      })
    }
  }) 

  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List sx={{ width: 240, mt: 8 }}>
        {data.map((country) => (
          <React.Fragment key={country.name}>
            <ListItemButton onClick={() => handleCountryClick(country.name)}>
              <ListItemText primary={country.name} />
              {openCountry === country.name ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={openCountry === country.name} timeout="auto" unmountOnExit>
              <List component="div" disablePadding sx={{ pl: 2 }}>
                {country.locations.map((loc) => (
                  <React.Fragment key={loc.name}>
                    <ListItemButton onClick={() => handleLocationClick(loc.name)}>
                      <ListItemText primary={loc.name} />
                      {openLocation === loc.name ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    
                    <Collapse in={openLocation === loc.name} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding sx={{ pl: 2 }}>
                        {loc.spots.map((spot) => (
                          <React.Fragment key={spot.name}>
                            <ListItemButton 
                              key={spot.id} 
                              onClick={() => handleSpotSelect(country.name, loc.name, spot)}
                            >
                              <ListItemText primary={spot.name} />
                            </ListItemButton>
                          </React.Fragment>
                        ))}
                      </List>
                    </Collapse>
                  </React.Fragment>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigation
