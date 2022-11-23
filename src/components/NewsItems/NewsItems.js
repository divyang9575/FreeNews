import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, desc, urlToImage, url ,source,author,date} = this.props;
    return (
      <>
        <div className="card flex flex-col bg-black text-white h-500 w-96 border-2 border-black border- rounded-lg relative hover:p-[0.1rem]">
          <span className="absolute -top-2 bg-red-700 px-2 text-sm rounded-md">{!source?"Unknown":source}</span>
          <img src={urlToImage} alt="..." className="card-img h-64 w-fit" />
          <div className="card-body ">
            <h3 className="card-title font-semibold mb-2">{title}</h3>
            <p className="font-thin">{desc}...</p>
            <p className="text-gray-300 opacity-50 mt-3 text-sm">By {author?author:"Unknown"} at {new Date(date).toGMTString()}</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-800 hover:bg-blue-900 text-white hover:p-[0.55rem] rounded-lg px-2 py-2 absolute bottom-2 left-2"
            >
              Read more
            </a>
          </div>
        </div>
        
      </>
    );
  }
}
