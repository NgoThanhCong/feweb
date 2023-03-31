import React from "react";

export default function ViewIdea() {
    return (
        <>
        <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#">FPT Greenwich</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

                <div style={{ paddingLeft: "30px" }}>

                </div>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Create event</a>
                </li>

                <li className="nav-item active">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        View Idea
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Create Account</a>
                </li>
                <li>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-group my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </li>
            </ul>
            <li className="nav nav-item">
                <a href="login.html" title="Logout">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hide-sm">Logout</span></a>
            </li>
        </div>
    </nav>

    <section className="container">
        <h1 className="large text-primary">
            Posts
        </h1>
        <p className="lead"><i className="fas fa-user"></i> Welcome to the community!</p>

        <div className="post-form">
            <div className="bg-primary p">
                <h3>Say Something...</h3>
            </div>
            <form className="form my-1">
                <textarea name="text" cols="30" rows="5" placeholder="Create a post" required></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>

        <div className="posts">
            <div className="post bg-white p-1 my-1">
                <div>
                    <a href="profile.html">
                        <img className="round-img"
                            src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg"
                            alt="" />
                        <h4>Thai Son</h4>
                    </a>
                </div>

                <div>
                    <p className="my-1">
                        Xin chao tat ca cac ban!
                    </p>
                    <p className="post-date">
                        Posted on 10/03/2023
                    </p>
                    <button type="button" className="btn btn-light">
                        <i className="fas fa-thumbs-up"></i>
                        <span>1</span>
                    </button>
                    <button type="button" className="btn btn-light">
                        <i className="fas fa-thumbs-down"></i>
                        <span>1</span>
                    </button>
                    <button type="button" className="btn btn-danger">
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</body>
        </>
    )
}