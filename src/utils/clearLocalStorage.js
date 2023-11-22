export function clearLocalStorage() {
  const storedTimestamp = localStorage.getItem("lastRunTimestamp");

  if (storedTimestamp) {
    const lastRunTimestamp = new Date(storedTimestamp);
    const currentTimestamp = new Date();
    const timeDifference = Math.floor(
      (currentTimestamp - lastRunTimestamp) / (1000 * 60)
    );
    if (timeDifference >= 5) {
      localStorage.clear();
      console.log("Local storage cleared due to expiration.");
    } else {
      console.log("Local storage is still valid.");
    }
  } else {
    console.log("No lastRunTimestamp found in local storage.");
  }
}
