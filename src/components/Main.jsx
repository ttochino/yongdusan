import { useQuery } from "react-query";
import { css } from "@emotion/react";
import Weather from "./Weather";
import Map from "./Map";
import WeatherDetails from "./WeatherDetails";
import mediaQueries from "../styles/mediaQueries";
import loadWeather from "../api";
import Loading from "./Loading";

export default function Main() {
  const { data, isLoading } = useQuery(["weather"], loadWeather);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main css={styleMain}>
      <section css={styleMainTop}>
        <Weather weather={data} />
        <Map weather={{}} />
      </section>
      <section css={styleMainBottom}>
        <WeatherDetails weatherDetail={data} />
      </section>
    </main>
  );
}

const styleMain = css({
  margin: "0 auto",
  padding: "32px 16px",
  maxWidth: "1200px",
  [mediaQueries.laptop]: {
    padding: "32px",
  },
});

const styleMainTop = css({
  marginBottom: "50px",
  marginTop: "1vh",
  [mediaQueries.tablet]: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
});

const styleMainBottom = css({
  display: "grid",
  justifyItems: "center",
  justifyContent: "center",
  gridTemplateColumns: "repeat(4, 160px)",
  gap: "3vh",
  [mediaQueries.mobile]: {
    gridTemplateColumns: "repeat(2, 160px)",
    gap: "3vh",
  },
});
