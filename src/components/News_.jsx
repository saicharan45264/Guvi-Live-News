import React, { useState, useEffect } from 'react';
import NewsItem from './Newsitem';
import Spinner from './Spinner';

function News({ country, category, pageSize }) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);
        setArticles(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, category, country, pageSize]);

  return (
    <>
      <div className="container my-4">
        <h2 className="text-center mb-4 text-danger text-capitalize">
          {category} News
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {articles.map((article, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  url={article.urlToImage}
                  linkUrl={article.url}
                  author={article.author}
                  date={article.publishedAt}
                  source={article.source?.name}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="d-flex justify-content-center gap-3 my-4">
        <button
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={() => setPage(page - 1)}
        >
          &larr; Previous
        </button>
        <button
          className="btn btn-dark"
          onClick={() => setPage(page + 1)}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}

export default News;
