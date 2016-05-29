var apiKey = "60mH9LzwMcTnFih1wTF6SRTAv91jGjekmJWtciR6";

export function getUrl(part) {
    return "https://api.nasa.gov/" + part + "&api_key=" + apiKey;
}