const API_URL = "https://api.openstreetmap.org/api/0.6/";

export async function getOSMData(type, bbox) {
    const query = `
    [out:json];
    ${type}(${bbox.join(",")});
    out;
  `;

    const response = await fetch(`${API_URL}interpreter?data=${encodeURIComponent(query)}`);
    const json = await response.json();
    return json;
}
