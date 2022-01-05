import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import classNames from "classnames";
import image from "../src/images/alan_ai.png";
import useStyles from "./styles";

const alanKey =
  "bcef3cbf1095da649cccce1a18c56a572e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState();
  const classes = useStyles();
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classNames.logoContainer}>
        <img src={image} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
