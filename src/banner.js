import React from "react";

function randInt(min, max) {
  let x = max - min + 1;
  return min + Math.floor(Math.random() * x);
}

export default function Banner() {
  const r = randInt(1, 3);
  let banner = "";
  let url = "";

  switch (r) {
    case 1:
      banner = "./banners/loona1.jpg";
      url = "http://loonatheworld.com/";
      break;
    case 2:
      banner = "./banners/loona2.jpeg";
      url = "https://www.youtube.com/c/loonatheworld/videos";
      break;
    case 3:
      banner = "./banners/loona3.jpg";
      url = "https://twitter.com/loonatheworld";
      break;

    default:
      break;
  }

  const bannerClick = () => {
    window.open(url);
  };

  return (
    <div
      style={{
        margin: "20px",
        textAlign: "center",
      }}
    >
      <img
        src={banner}
        onClick={bannerClick}
        style={{
          cursor: "pointer",
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        alt="banner"
      />
    </div>
  );
}
