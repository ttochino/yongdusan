import { css } from "@emotion/react";
import { styleCard, styleCardContent, styleCardTitle } from "../styles/card";

export default function Humidity({ humidity }) {
  let numberOfWaterDrop;
  if (humidity <= 25) {
    numberOfWaterDrop = 1;
  } else if (humidity <= 50) {
    numberOfWaterDrop = 2;
  } else if (humidity <= 75) {
    numberOfWaterDrop = 3;
  } else {
    numberOfWaterDrop = 4;
  }
  return (
    <div css={styleCard}>
      <h4 css={styleCardTitle}>습도</h4>
      <ul css={styleHumidityImages}>
        {Array(numberOfWaterDrop)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <figure css={styleHumidityImageWrapper}>
                <img
                  src="/src/assets/waterDrop.png"
                  alt="water-drop"
                  css={styleHumidityImage}
                />
              </figure>
            </li>
          ))}
      </ul>
      <p css={[styleCardTitle, styleCardContent]}>{humidity}%</p>
    </div>
  );
}

const styleHumidityImages = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const styleHumidityImageWrapper = css({
  width: "30px",
  height: "30px",
});

const styleHumidityImage = css({
  width: "100%",
  objectFit: "cover",
});
