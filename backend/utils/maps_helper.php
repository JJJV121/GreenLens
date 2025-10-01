<?php
function getNearbyFacilities($lat, $lng, $type="recycling"){
    // Example Google Maps Nearby API call (pseudo)
    $api_key = "YOUR_GOOGLE_MAPS_API_KEY";
    $url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$lat,$lng&radius=5000&type=$type&key=$api_key";
    $response = file_get_contents($url);
    return json_decode($response, true);
}
?>
