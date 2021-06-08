<div
  className="progressbar primary-border-color"
  data-progress-bar="true"
  data-show-progress-string="true"
  data-progress-text="Avancement"
>
  <div
    className="progressbar-visual"
    data-progress-bar-visual="true"
    style={{
      width: `${this.state.progress}%`,
      transition: "width 0.5s ease-out 0s",
    }}
  ></div>
  <div className="progressbar-text" data-progress-bar-text="true">
    <span>Progress</span> <span>{`${this.state.progress}%`}</span>
  </div>
</div>;

/**
 * .progressbar {
  background: #e4e4e4;
  text-align: center;
  margin: 10px auto;
  height: 20px;
  font-size: 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  letter-spacing: 0.025em;
  width: 100%;
  height: auto;
  margin-top: 1rem;
  position: relative;
}

.progressbar::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: #e5f5fb;
}

.progressbar-visual {
  background: #53d75e;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #39da96;
  border-radius: 0;
}

.progressbar-text {
  color: #000;
  font-size: 0.8em;
  display: inline;
  position: relative;
  padding: 0.025em;
  text-align: center;
  margin: 0 auto;
}
 */
