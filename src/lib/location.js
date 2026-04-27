const STATE_MAP = {
  "alabama": "AL", "alaska": "AK", "arizona": "AZ", "arkansas": "AR", "california": "CA",
  "colorado": "CO", "connecticut": "CT", "delaware": "DE", "florida": "FL", "georgia": "GA",
  "hawaii": "HI", "idaho": "ID", "illinois": "IL", "indiana": "IN", "iowa": "IA",
  "kansas": "KS", "kentucky": "KY", "louisiana": "LA", "maine": "ME", "maryland": "MD",
  "massachusetts": "MA", "michigan": "MI", "minnesota": "MN", "mississippi": "MS",
  "missouri": "MO", "montana": "MT", "nebraska": "NE", "nevada": "NV", "new hampshire": "NH",
  "new jersey": "NJ", "new mexico": "NM", "new york": "NY", "north carolina": "NC",
  "north dakota": "ND", "ohio": "OH", "oklahoma": "OK", "oregon": "OR", "pennsylvania": "PA",
  "rhode island": "RI", "south carolina": "SC", "south dakota": "SD", "tennessee": "TN",
  "texas": "TX", "utah": "UT", "vermont": "VT", "virginia": "VA", "washington": "WA",
  "west virginia": "WV", "wisconsin": "WI", "wyoming": "WY"
};

/**
 * Normalizes location search input.
 * If user types "Texas", it returns ["texas", "TX"].
 * If user types "TX", it returns ["tx", "TX"].
 */
export function normalizeLocationSearch(query) {
  const lowerQuery = query.toLowerCase().trim();
  const abbreviation = STATE_MAP[lowerQuery];
  
  const terms = [lowerQuery];
  if (abbreviation) terms.push(abbreviation.toLowerCase());
  
  return terms;
}

/**
 * Formats the search query for display.
 * "tx" -> "TX"
 * "austin" -> "Austin"
 */
export function formatLocationDisplay(query) {
  if (!query) return "";
  
  return query
    .split(" ")
    .map(word => {
      const lower = word.toLowerCase();
      // If it's a 2-letter state code, uppercase it
      if (lower.length === 2 && Object.values(STATE_MAP).includes(lower.toUpperCase())) {
        return lower.toUpperCase();
      }
      // Otherwise, title case
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}
