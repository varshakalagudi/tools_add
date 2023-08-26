import React from 'react';

const ToolPage = () => {
  return (
    <div>
      <h1>Tool Configuration</h1>
      <form>
        <div className="form-group">
          <label htmlFor="toolName">Tool Name</label>
          <input type="text" className="form-control" id="toolName" />
        </div>
        <div className="form-group">
          <label htmlFor="toolUrl">Tool URL</label>
          <input type="text" className="form-control" id="toolUrl" />
        </div>
        <div className="form-group">
          <label htmlFor="authKey">Auth Key / Secret Key</label>
          <input type="text" className="form-control" id="authKey" />
        </div>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
};

export default ToolPage;
