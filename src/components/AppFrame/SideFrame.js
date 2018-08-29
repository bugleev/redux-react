import React from "react";

export default () => {
  return (
    <div className="app-sideframe">
      <div className="app-sideframe__content">
        <div className="sideframe__logo-wrapper">Logo</div>
        <div className="sideframe__links-wrapper">
          <div className="sideframe__links-wrapper__link">Link 1</div>
          <div className="sideframe__links-wrapper__link">Link 1</div>
          <div className="sideframe__links-wrapper__link">Link 1</div>
          <div className="sideframe__links-wrapper__link">Link 1</div>
          <div className="sideframe__links-wrapper__link">Link 1</div>
        </div>
      </div>
      <div className="app-sideframe__user-info">
        <div className="sideframe__user-icon">User Icon</div>
        <div className="sideframe__user-options">three dots</div>
      </div>
    </div>
  );
};
