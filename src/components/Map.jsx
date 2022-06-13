import { css } from "@emotion/react";

export default function Map() {
  return (
    <div css={styleMapWrapper}>
      <figure css={styleMapImageWrapper}>
        <img
          src="/src/assets/yongdusan.png"
          alt="yongdusan-map"
          css={styleMapImage}
        />
      </figure>
    </div>
  );
}

const styleMapWrapper = css({
  display: "flex",
  justifyContent: "center",
});

const styleMapImageWrapper = css({
  width: "600px",
  flexGrow: "1",
});

const styleMapImage = css({
  width: "100%",
  objectFit: "cover",
});
