export function appDownloadClick({ url, device, type }) {
  let eventName = "";
  if (device === "mweb" && type === "android") {
    eventName = "";
  } else if (device === "mweb" && type === "ios") {
    eventName = "";
  } else if (device === "web" && type === "android") {
    eventName = "";
  } else if (device === "web" && type === "ios") {
    eventName = "";
  }

  if (eventName !== "") {
    dataLayer.push({
      event: eventName,
      url,
    });
  }
}
