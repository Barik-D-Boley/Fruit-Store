function copy() {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
      });
}
function location() {
    alert("35050 N North Valley Pkwy Phoenix AZ 85086");
}
function subscription() {
    alert("Hallo!");
}