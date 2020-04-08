import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            prevScrollpos: window.pageYOffset,
            visible: true
        };
    }

    // Adds an event listener when the component is mount.
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    // Remove the event listener when the component is unmount.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    // Hide or show the menu.
    handleScroll = () => {
        const { prevScrollpos } = this.state;

        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;

        this.setState({
            prevScrollpos: currentScrollPos,
            visible
        });
    };

    render() {
        return (
            <nav
                className={classnames("navbar", {
                    "navbar--hidden": !this.state.visible
                })}
            >
                <Link to="/edu" className="nav-link">
                    Experience
                    </Link>
                <Link to="/portfolio" className="nav-link">
                    Portfolio
                    </Link>
                <Link to="/edu" className="nav-link">
                    Education
                    </Link>
            </nav>
        );
    }
}

