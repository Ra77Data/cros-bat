navigator.getBattery().then(battery => {
  function updateBatteryLevel() {
    let batteryLevel = Math.round(battery.level * 100);
    document.getElementById('battery-level').style.width = batteryLevel + "%";
    document.getElementById('battery-percentage').textContent = batteryLevel + "%";
  }

  updateBatteryLevel(); 
  battery.addEventListener('levelchange', updateBatteryLevel);
});