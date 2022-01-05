import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { Typography } from "@material-ui/core";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/NewsCards";
import image from "../src/images/alan_ai.png";
import useStyles from "./styles";

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: "bcef3cbf1095da649cccce1a18c56a572e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "instructions") {
          setIsOpen(true);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={image} className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
