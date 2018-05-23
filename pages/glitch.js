import React from "react";
import Nav from "../components/nav";

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  hasClass(el, className) {
    return el.classList.contains(className);
  }

  addClass(el, classNames) {
    classNames = classNames.split(" ");
    if (el.classList)
      classNames.forEach(classname => el.classList.add(classname));
    else if (!hasClass(el, className))
      classNames.forEach(classname => (el.className += " " + classname));
  }

  removeClass(el, className) {
    if (el.classList) el.classList.remove(className);
    else if (hasClass(el, className)) {
      var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
      el.className = el.className.replace(reg, " ");
    }
  }

  componentDidMount() {
    let lastAnimation = 0,
      sections = Array.prototype.slice.call(document.querySelectorAll(".box")),
      currentSection = 0,
      len = sections.length;

    const handleScroll = e => {
      e.preventDefault();

      let timeNow = Date.now(),
        delta = e.deltaY,
        newSection,
        oldValue;

      if (timeNow - lastAnimation < 1500) {
        return;
      }
      oldValue = currentSection;
      if (e.deltaY < 0) {
        // Up
        newSection = currentSection > 0 ? currentSection - 1 : len - 1;
      } else {
        // Down
        newSection = currentSection < len - 1 ? currentSection + 1 : 0;
      }
      if (currentSection !== newSection) {
        this.addClass(sections[currentSection], "previous");
        this.addClass(sections[newSection], "current animating");

        this.removeClass(sections[currentSection], "current");
        setTimeout(() => {
          this.removeClass(sections[newSection], "animating");
          this.removeClass(sections[oldValue], "previous");
        }, 1500);
        currentSection = newSection;
      }

      lastAnimation = timeNow;
    };

    // first-load
    // this.addClass(sections[currentSection], "current");
    document.addEventListener("wheel", handleScroll);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="box_container">
            <div
              className="box current"
              style={{ backgroundImage: "url(/static/images/image_1.jpeg" }}
            >
              <div className="title">1st box</div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: "url(/static/images/image_2.jpeg)" }}
            >
              <div className="title">2nd box</div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: "url(/static/images/image_3.jpeg)" }}
            >
              <div className="title">3rd box</div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: "url(/static/images/image_4.jpeg" }}
            >
              <div className="title">4th box</div>
            </div>
            <div
              className="box"
              style={{ backgroundImage: "url(/static/images/image_5.jpeg)" }}
            >
              <div className="title">5th box</div>
            </div>
          </div>
          <style jsx>{`
            :global(body) {
              margin: 0;
            }
            * {
              box-sizing: border-box;
            }
            .container {
              background-color: rgba(0, 0, 0, 0.8);
              height: 90vh;
              width: 100vw;
              display: flex;
              align-items: center;
            }
            .box_container {
              height: 40vh;
              width: 70vw;
              overflow: hidden;
              margin: auto;
              position: relative;
            }
            .box {
              display: flex;
              align-items: center;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              width: 100%;
              height: 100%;
              opacity: 0;
              background-position: center;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .box.current {
              opacity: 1;
              z-index: 10;
            }
            .box.animating {
              animation-name: standard_animation;
              animation-duration: 1.2s;
              animation-fill-mode: forwards;
              animation-iteration-count: infinite;
              animation-timing-function: linear;
            }
            .box.previous {
              opacity: 1;
            }
            .title {
              background-color: lightgrey;
              font-size: 5rem;
              padding-left: 4rem;
              max-width: 80vw;
              min-width: 30%;
              line-height: 1.4;
              font-weight: 900;
              opacity: 0;
              position: relative;
              z-index: 10;
            }
            .box.previous .title {
              opacity: 1;
            }
            .box.current .title {
              animation-name: title_animation;
              animation-duration: 0.7s;
              animation-delay: 1.5s;
              animation-fill-mode: forwards;
              animation-iteration-count: 1;
              animation-timing-function: linear;
            }
            .box:after {
              content: "";
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              display: block;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
            }
            @keyframes standard_animation {
              0% {
                width: calc(100vw + 500px);
                left: 250px;
                clip-path: polygon(0 2%, 100% 2%, 100% 3.5%, 0 3.5%);
                transform: translate3d(-250px, 0, 0);
                background-color: #000;
                background-blend-mode: overlay;
              }
              10% {
                clip-path: polygon(0 40%, 100% 40%, 100% 42.5%, 0 42.5%);
              }
              20% {
                clip-path: polygon(0 20%, 100% 20%, 100% 23.5%, 0 23.5%);
              }
              35% {
                clip-path: polygon(0 15%, 100% 15%, 100% 17.5%, 0 17.5%);
                background-color: #000;
                background-blend-mode: luminosity;
              }
              50% {
                width: calc(100vw + 500px);
                left: -250px;
                transform: translate3d(250px, 0, 0);
                clip-path: polygon(0 50%, 100% 50%, 100% 57.5%, 0 57.5%);
              }
              63% {
                clip-path: polygon(0 20%, 100% 20%, 100% 25%, 0 25%);
              }
              70% {
                background-color: red;
                background-blend-mode: darken;
                clip-path: polygon(0 70%, 100% 70%, 100% 72.5%, 0 72.5%);
              }
              80% {
                clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
              }
              90% {
                clip-path: polygon(0 85%, 100% 85%, 100% 87.5%, 0 87.5%);
              }
              100% {
                clip-path: polygon(0 0%, 100% 0%, 100% 100%, 0 100%);
              }
            }

            @keyframes title_animation {
              0% {
                transform: translate3d(2px, -2px, 0);
                clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
              }
              20% {
                clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
              }
              41% {
                clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
              }
              52% {
                clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
              }
              61% {
                clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
              }
              75% {
                clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
              }
              80% {
                clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
              }
              96% {
                clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
              }
              100% {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }
}
