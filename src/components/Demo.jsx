import { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick, plane, enter } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articleFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articleFromLocalStorage) {
      setAllArticles(articleFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full max-w-xl">
      <section className="w-full max-w-xl mt-16">
        {/* search */}
        <div className="flex flex-col w-full gap-2">
          <form
            className="relative flex items-center justify-center "
            onSubmit={handleSubmit}
          >
            <img
              src={linkIcon}
              alt="link_icon"
              className="absolute left-0 w-5 my-2 ml-3"
            />

            <input
              type="url"
              placeholder="Enter a URL"
              value={article.url}
              onChange={(e) =>
                setArticle({
                  ...article,
                  url: e.target.value,
                })
              }
              required
              className="url_input "
            />

            <button
              type="submit"
              className="border-none submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
            >
              <img
                height={25}
                width={25}
                src={enter}
                alt="plane icon"
                className="opacity-60"
              />
            </button>
          </form>

          {/* Browse URL History */}

          <div className="flex flex-col gap-1 overflow-y-auto max-h-60">
            {allArticles.map((item, index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card"
              >
                <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                  <img
                    src={copied === item.url ? tick : copy}
                    alt="copy_icon"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 text-sm font-medium text-blue-700 truncate font-satoshi">
                  {item.url}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Display Result(s) */}

        <div className="flex justify-center max-w-full my-10 item-center">
          {isFetching ? (
            <img
              src={loader}
              alt="loader"
              className="object-contain w-20 h-20"
            />
          ) : error ? (
            <p className="font-bold text-center text-white font-inter">
              Well, that certainly took an unexpected turn. 😮
              <br />
              <span className="font-normal text-gray-700 font-satoshi">
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-white font-satoshi">
                  Article <span className="blue_gradient">Summary</span>
                </h2>

                <div className="summary_box">
                  <p className="text-sm font-medium text-white font-inter">
                    {article.summary}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Demo;
