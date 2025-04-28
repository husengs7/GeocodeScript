function GOOGLEMAPS_LATLONG(address) {
  if (address === "") return [["", ""]]; // ← 二重配列に変更
  var geocoder = Maps.newGeocoder();
  var location = geocoder.geocode(address);
  if (location.status === "OK") {
    var lat = location.results[0].geometry.location.lat;
    var lng = location.results[0].geometry.location.lng;
    return [[lat, lng]]; // ← 横方向に展開されるように修正
  } else {
    return [["", ""]]; // ← ここも二重配列に
  }
}
