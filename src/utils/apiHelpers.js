// src/utils/apiHelpers.js
const API_BASE = "https://high-plating-184911.appspot.com/";

// Fetch the full Country > Location > Spot hierarchy
export const fetchSpotsHierarchy = async () => {
  const response = await fetch(`${API_BASE}/spots`);
  if (!response.ok) throw new Error('Failed to load navigation data (countries, locations, spots');
  return response.json();
};

// Fetch specific forecast data for a spot from a selected source
export const fetchForecast = async (source, spotId = null) => {
  const url = (spotId) 
    ? `${API_BASE}/forecast/${source}/${spotId}` 
    : `${API_BASE}/forecast/${source}`
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to load forecast for selected source');
  return response.json();
};

// Fetch specific forecast data for a spot from a selected source
export const fetchReports = async () => {
  const response = await fetch(`${API_BASE}/reports`);
  if (!response.ok) throw new Error('Failed to load reports');
  return response.json();
};