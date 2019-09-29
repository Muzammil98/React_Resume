import React from "react";

function Social() {
  return (
    <div className="p-4 mt-2 text-muted bg-white d-flex justify-content-between">
      <span>
        <i class="fab text-danger fa-2x fa-instagram"></i>
        <span className="d-none d-md-inline">#JohnDoe</span>
      </span>
      <span>
        <i class="fab text-info fa-2x  fa-twitter"></i>
        <span className="d-none d-md-inline">#JohnDoe</span>
      </span>
      <span>
        <i class="fab text-success fa-2x  fa-whatsapp"></i>
        <span className="d-none d-md-inline">#JohnDoe</span>
      </span>
      <span>
        <i class="fab text-primary fa-2x  fa-facebook"></i>
        <span className="d-none d-md-inline">#JohnDoe</span>
      </span>
      <span>
        <i class="fab text-warning fa-2x  fa-snapchat"></i>
        <span className="d-none d-md-inline">#JohnDoe</span>
      </span>
    </div>
  );
}

export default Social;
