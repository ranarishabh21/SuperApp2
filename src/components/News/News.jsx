import React, { useEffect, useState } from "react";
import styles from "./News.module.css";

function News() {
  const [news, setNews] = useState();
  const fetchNews = () => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8d5decc14c7b4a618e6cf600c7762f01`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const articleNo = Math.floor(Math.random() * 20);
        const inputDate = new Date(data.articles[articleNo].publishedAt);
        const dateFormat = `${
          +inputDate.getMonth() + 1
        }-${inputDate.getDate()}-${inputDate.getFullYear()} | ${inputDate.toLocaleString(
          "en-US",
          { hour: "numeric", minute: "numeric", hour12: true }
        )}`;
        data.articles[articleNo].publishedAt = dateFormat;
        setNews(data.articles[articleNo]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <>
      <img
        className={styles.newsImg}
        src={
          news
            ? news.urlToImage
            : "https://static.foxnews.com/foxnews.com/content/uploads/2023/09/GettyImages-1662782212.jpg"
        }
        alt="news"
      />
      <p className={styles.newsContent}>
        {news
          ? news.content
          : "Do you remember way back in 2021 when Elon Musk was the darling of the Left of the cultural elite? He was building electric cars and then launching them into space on rockets he built. He went to all"}
      </p>
      <div className={styles.newsTitle}>
        {news ? news.title : "Biden's war on everything Elon Musk"}
        <span>{news ? news.publishedAt : "10-4-2023|09:33 AM"}</span>
      </div>
    </>
  );
}

export default News;
