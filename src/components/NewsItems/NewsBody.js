import NewsItems from "./NewsItems";
import React, { Component } from "react";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class NewsBody extends Component {
  static defaultProps = {
    pageSize:8,
    country:"in",
    category:"general"
  }
  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
  }
  articles = [
    {
      source: {
        id: "id1",
        name: "CNBC",
      },
      author: "Ashley Capoot",
      title:
        "Pelosi says Republican's 'red wave' turned into a 'little, tiny trickle' - CNBC",
      description:
        'As states across the country continue to count votes in a tight battle for control of the House of Representatives, House Speaker Nancy Pelosi said Democrats "haven\'t given up."',
      url: "https://www.cnbc.com/2022/11/13/pelosi-says-republicans-red-wave-turned-into-a-little-tiny-trickle.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107150436-1668176479122-gettyimages-1440743452-sg013304_ba062e81-1971-47b9-9165-d3187894d72b.jpeg?v=1668354846&w=1920&h=1080",
      publishedAt: "2022-11-13T15:54:06Z",
      content:
        'As states across the country continue to count votes in a tight battle for control of the House of Representatives, House Speaker Nancy Pelosi said Democrats "haven\'t given up."\r\n"Whatever the outcom… [+2466 chars]',
    },
    {
      source: {
        id: "id2",
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "US midterms: Republicans blame Trump and McConnell for poor showing - BBC",
      description:
        "Donald Trump and Mitch McConnell get heat from colleagues after the Democrats keep control of the Senate.",
      url: "https://www.bbc.com/news/world-us-canada-63618188",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/152CC/production/_127623768_gettyimages-1244654733.jpg",
      publishedAt: "2022-11-13T18:17:37Z",
      content:
        "News that Democrats have held the US Senate after midterm elections this week has sparked recriminations within the Republican Party.\r\nCritics of former President Donald Trump blamed him for the poor… [+2533 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Al Jazeera",
      title:
        "Explosion in Turkey’s Istanbul kills six, injures 81 - Al Jazeera English",
      description:
        "Turkey’s President Erdogan says the blast on a busy Istanbul thoroughfare was a ‘heinous attack’.",
      url: "https://www.aljazeera.com/news/2022/11/13/turkey-istanbul-explosion-istiklal-several-injured",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2022/11/AP22317556088099.jpg?resize=1920%2C1440",
      publishedAt: "2022-11-13T18:11:15Z",
      content:
        "Six people have been killed and 81 others wounded as an explosion rocked a busy pedestrian street in central Istanbul, in an incident that President Recep Tayyip Erdogan has called a bomb attack that… [+2894 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c265c48f85074f24a1a57d04d3237f7e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    });
  }
  async componentDidMount() {
    this.updateNews()
  }
  handlePrev = async () => {
    if (this.state.page <= 1) {
      alert("You are on the first page");
    } else {
      console.log("previous");
      this.state.page--
      this.updateNews()
    }
  };
  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {
      alert("you are on the last page")
    } 
    else {
      console.log("Next");
      this.state.page++;
      this.updateNews();
    }
  };

  render() {
    return (
      <>
      <div className="bg-blue-100">

        <div className="newsbody flex flex-col space-x-4 ">
          <h1 className="font-bold text-4xl text-center font-serif my-8">
            FreeNews - Top Headlines
          </h1>
          <div className="flex justify-center">
          {this.state.loading && <Spinner />}
          </div>
          <div className="cards flex flex-row flex-wrap justify-center space-x-4 space-y-4"><span></span>
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <NewsItems
                  key={element.url}
                  title={element.title != null ? element.title : ""}
                  desc={
                    element.description != null
                      ? element.description.slice(0, 100)
                      : ""
                  }
                  urlToImage={
                    element.urlToImage == null
                      ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                      : element.urlToImage
                  }
                  url={element.url}
                  source={element.source.name}
                  author={element.author}
                  date={element.publishedAt}
                />
              );
            })}
          </div>
          <div className="prevnext flex justify-between mb-10 mt-4">
            <button
              className=" disabled:opacity-50 bg-black text-white rounded-lg py-3 px-5 ml-10 hover:px-[1.3rem] hover:bg-gray-800"
              onClick={this.handlePrev}
              disabled={this.state.page<=1}
            >
              &larr;Previous
            </button>
            <button
              className="disabled:opacity-50 bg-black text-white rounded-lg py-3 px-5 mr-10 hover:px-[1.3rem] hover:bg-gray-800"
              onClick={this.handleNext}
                disabled={
                  this.state.page + 1 > Math.ceil(this.state.totalResults / 12)
              }
            >
              Next&rarr;
            </button>
          </div>
        </div>
        </div>
      </>
    );
  }
}
