import { css } from "@emotion/react";
import { styleCard, styleCardContent, styleCardTitle } from "../styles/card";

export default function WindSpeed({ windSpeed }) {
  return (
    <div css={[styleCard, styleWindSpeed]}>
      <h4 css={styleCardTitle}>풍속</h4>
      <div css={styleWindSpeedBody}>
        <figure css={styleWindSpeedImageWrapper}>
          <img
            src="/src/assets/graph.png"
            alt="wind-speed"
            css={styleWindSpeedImageWrapper}
          />
        </figure>
      </div>
      <p css={[styleCardTitle, styleCardContent]}>
        {windSpeed}
        m/s
      </p>
    </div>
  );
}

const styleWindSpeed = css({
  background: "#c37338",
});

const styleWindSpeedBody = css({
  display: "flex",
  justifyContent: "center",
});

const styleWindSpeedImageWrapper = css({
  width: "90px",
  height: "50px",
});

const styleWindSpeedImage = css({
  width: "100%",
  objectFit: "cover",
});
