import React from 'react'

function Newsitem({title, description, url, linkUrl, author, date, source}) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-3 hover-shadow">
    <img src={url} className="card-img-top rounded-top" alt="news" />
    <div className="card-body position-relative">
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
        {source}
        </span>
        <h5 className="card-title text-primary fw-bold">
        {title ? title.slice(0, 60) + "..." : "No Title"}
        </h5>
        <p className="card-text text-muted">
        {description ? description.slice(0, 100) + "..." : "No description"}
        </p>
        <p className="card-text">
        <small className="text-secondary">
            By {author || "Anonymous"} on {new Date(date).toLocaleString()}
        </small>
        </p>
        <a
        href={linkUrl}
        className="btn btn-outline-primary btn-sm"
        target="_blank"
        rel="noreferrer"
        >
        Read More →
        </a>
    </div>
    </div>
  )
}

export default Newsitem